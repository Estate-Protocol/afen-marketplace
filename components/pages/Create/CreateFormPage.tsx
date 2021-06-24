import React, { Component } from "react";
import Container from "@/design-system/Container";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import { TextInput } from "@/design-system/Inputs";
import Flex from "@/design-system/Flex";
import Button from "@/design-system/Button";
import Image from "next/image";
import { User } from "@/components/User/types/User";
import { CreateFormResponse } from "pages/create";
import { BsArrowRight } from "react-icons/bs";
// import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
// import MenuDropdown from "@/design-system/MenuDropdown";

export interface CreateFormInput {
  price: number;
  upload: File | null;
  bnb: boolean;
  afen: boolean;
  minimumBid?: number;
  startDate?: string;
  endDate?: string;
  title: string;
  description?: string;
  royalty?: number;
  properties?: {
    [key: string]: string;
  }[];
}

interface IProps {
  user?: User;
  wallet: string;
  loading: boolean;
  message?: CreateFormResponse;
  onSubmit: (data: CreateFormInput) => void;
}

interface IState {
  price: number;
  upload: File | null;
  afen: boolean;
  bnb: boolean;
  minimumBid?: number;
  startDate: string;
  endDate: string;
  title: string;
  description?: string;
  royalty?: number;
  properties?: {
    [key: string]: string;
  }[];
  previewImage: string | null;
}

enum NFTProperties {
  Height = "Height",
  Width = "Width",
  Depth = "Depth",
  Medium = "Medium",
}

export default class CreateForm extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      price: 0,
      upload: null,
      bnb: false,
      afen: true,
      minimumBid: 0,
      startDate: "",
      endDate: "",
      title: "",
      description: "",
      properties: [],
      previewImage: null,
    };
  }

  handlePriceSelection = () => {
    this.setState({ bnb: !this.state.bnb, afen: !this.state.afen });
  };

  handlePriceValue = (data: number) => {
    this.setState({ price: data });
  };

  onAddProperty = (property: string) => {
    if (this.state.properties.length < 5) {
      const properties = [...this.state.properties, { [property]: "" }];
      this.setState({ properties });
    }
  };

  onRemoveProperty = (index: number) => {
    const properties = [...this.state.properties];
    properties.splice(index, 1);
    this.setState({ properties });
  };

  handlePropertyChange = (index, property, value) => {
    const properties = [...this.state.properties];
    properties[index] = { [property]: value };
    this.setState({ properties });
  };

  isPropertyDisabled = (key: string) => {
    return !!this.state.properties.find(
      (property) => Object.keys(property)[0].toLowerCase() === key.toLowerCase()
    );
  };

  properties = () =>
    Object.values(NFTProperties).map((value) => ({
      label: value,
      value: value.toLowerCase(),
      disabled: this.isPropertyDisabled(value),
      onClick: (data) => this.onAddProperty(data as string),
    }));

  canSubmit = () => {
    return (
      this.state.upload &&
      this.state.title.length > 0 &&
      this.state.price !== null &&
      this.state.royalty < 100
    );
  };

  handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      upload: e.target.files[0],
    });
    if (e.target.files[0]) {
      this.setState({
        previewImage: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.canSubmit()) {
      this.props.onSubmit({ ...this.state });
    }
  };

  render() {
    return (
      <Container page style="mt-10 w-full md:mt-20 h-full">
        <Flex start>
          <div className="lg:pr-10 w-full lg:w-2/3">
            <Title>Create NFT</Title>
            <Text sub style="md:w-3/4">
              You can set how you want your NFT sold in two formats, by setting
              a fixed price or auction. We will notify you anytime your art has
              been bought or a bid has been placed.
            </Text>

            <form onSubmit={this.handleSubmit}>
              <div className="mt-10">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6">Art</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Upload the art you would want to list.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2 mb-0 sm:mb-10">
                    <div className="sm:overflow-hidden">
                      <div className="px-4 space-y-6 sm:pb-6">
                        <div>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={1}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="text-center text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-gray-100 dark:bg-white rounded-md font-medium focus:outline-none focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-afen-yellow"
                                >
                                  <span className="px-2">Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="fileUpload"
                                    type="file"
                                    className="sr-only"
                                    accept="image/*"
                                    onChange={this.handleImageInput}
                                  />
                                </label>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF only up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-white">
                        Price
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        We support listing your NFT either as BNB or AFEN.
                        Minimum value is 0
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2 mb-0 sm:mb-10">
                    <div className="overflow-hidden">
                      <div className="px-4 sm:pb-6">
                        <div className="grid grid-cols-12 gap-6">
                          <div className="col-span-6">
                            <div
                              className={`pb-4 group border-b-2 border-gray-500 mb-1 cursor-pointer h-20 ${
                                this.state.afen
                                  ? "border-b-2 border-afen-yellow"
                                  : ""
                              }`}
                              onClick={this.handlePriceSelection}
                            >
                              <Flex style="mb-2">
                                <Image src="/logo.png" width="30" height="30" />
                                <Text style={`text-lg ml-2`}>AFEN</Text>
                              </Flex>
                              <Text sub size="x-small" style="md:w-3/4">
                                Your NFT price will be listed using the AFEN
                                token.
                              </Text>
                            </div>
                          </div>

                          <div className="col-span-6">
                            <div
                              className={`pb-4 group border-b-2 border-gray-500 mb-1 cursor-pointer h-20 ${
                                this.state.bnb
                                  ? "border-b-2 border-afen-yellow"
                                  : ""
                              }`}
                              onClick={this.handlePriceSelection}
                            >
                              <Flex style="mb-2">
                                <Image
                                  src="/images/bnb.png"
                                  width="30"
                                  height="30"
                                />
                                <Text style={`text-lg ml-2`}>BNB</Text>
                              </Flex>
                              <Text sub size="x-small" style="md:w-3/4">
                                Your NFT price will be listed using BNB.
                              </Text>
                            </div>
                          </div>

                          <div className="col-span-full">
                            <TextInput
                              label={"Price"}
                              min={0}
                              value={this.state.price}
                              type="number"
                              placeholder="0.00"
                              prepend={
                                this.state.bnb ? (
                                  <>
                                    <Image
                                      src="/images/bnb.png"
                                      width="30"
                                      height="30"
                                    />
                                  </>
                                ) : (
                                  <>
                                    <Image
                                      src="/logo.png"
                                      width="30"
                                      height="30"
                                    />
                                  </>
                                )
                              }
                              onChange={(e) => this.handlePriceValue(e)}
                            />
                          </div>

                          <div className="col-span-full">
                            <TextInput
                              label={"Royalty"}
                              min={0}
                              max={100}
                              value={this.state.royalty}
                              type="number"
                              placeholder="%"
                              description="Percentage paid to you as the creator anytime any a transation is made on this art (Post Sale)"
                              onChange={(data) =>
                                this.setState({
                                  royalty: parseFloat(data),
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-white">
                        Details
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Name your art and if you like a description.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2 mb-10">
                    <div className="overflow-hidden">
                      <div className="pb-5 px-4 space-y-6 sm:pb-6">
                        <div className="col-span-full">
                          <TextInput
                            label={"Title"}
                            value={this.state.title}
                            type="text"
                            required
                            description="This is important because it would appear everywhere your art does"
                            onChange={(data) => this.setState({ title: data })}
                          />
                        </div>

                        <div className="col-span-full">
                          <TextInput
                            label={"Description"}
                            value={this.state.description}
                            type="text"
                            required
                            onChange={(data) =>
                              this.setState({ description: data })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="relative">
                    <div className="px-4 sm:pb-6">
                      <Flex spaceBetween style="mb-2 h-auto">
                        <div>
                          <Text>Properties</Text>
                          <Text sub size="x-small">
                            Set properties like size, medium, type, etc.
                          </Text>
                        </div>
                        <div className="absolute right-0 z-20">
                          <MenuDropdown
                            variant="add"
                            button={{
                              label: "Add",
                              icon: (
                                <AiOutlinePlus
                                  style={{ fill: "green" }}
                                  className="ml-2"
                                />
                              ),
                            }}
                            items={this.properties()}
                          />
                        </div>
                      </Flex>
                      {this.state.properties.map((property, index) => (
                        <div
                          className="grid grid-cols-12 gap-6 justify-items-stretch items-center"
                          key={index}
                        >
                          <div className="col-span-11 w-full">
                            <TextInput
                              label={
                                Object.keys(this.state.properties[index])[0]
                              }
                              value={Object.values(property)[0]}
                              type="text"
                              required
                              onChange={(data) =>
                                this.handlePropertyChange(
                                  index,
                                  Object.keys(this.state.properties[index])[0],
                                  data as string
                                )
                              }
                            />
                          </div>
                          <div className="col-span-1">
                            <Button
                              type="plain"
                              icon
                              onClick={() => this.onRemoveProperty(index)}
                            >
                              <AiOutlineDelete className="text-2xl" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  </div>
                </div>

                <Flex style="mb-10">
                  <Button
                    type="primary"
                    size="large"
                    style="ml-auto mt-4 inline-flex items-center"
                    inputType="submit"
                    disabled={!this.canSubmit()}
                  >
                    {this.props.message?.status === "success" ? (
                      <>
                        {this.props.message?.text}
                        {/* <BsArrowRight className="ml-2 text-xl md:text-2xl" /> */}
                      </>
                    ) : (
                      "Create"
                    )}
                    {this.props.loading && (
                      <svg
                        className={`ml-2 spinner stroke-current h-5 w-5 text-white`}
                        viewBox="0 0 50 50"
                      >
                        <circle
                          className="path"
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          strokeWidth="5"
                        ></circle>
                      </svg>
                    )}
                  </Button>
                </Flex>
              </div>
            </form>
          </div>
          <div className="hidden lg:block lg:w-1/3 lg:h-screen lg:min-h-screen overflow-hidden">
            <div className="relative h-2/3 w-full bg-gray-50 dark:bg-gray-500 p-16">
              {this.state.previewImage ? (
                <img
                  src={this.state.previewImage}
                  className="h-full w-full object-cover shadow-xl"
                />
              ) : (
                <Flex col center>
                  <div className="text-center my-auto">
                    <Text>Image Preview</Text>
                    <Text sub size="x-small">
                      Image uploaded will show here
                    </Text>
                  </div>
                </Flex>
              )}
            </div>
            <div className="mx-5 mt-2">
              <Flex spaceBetween wrap style="items-start mb-4 flex-nowrap">
                <div>
                  <Title style="text-2xl md:text-3xl font-semibold">
                    {this.state?.title || "---"}
                  </Title>
                  <div>
                    <div className="flex items-center mt-1 cursor-pointer">
                      <div className="overflow-hidden rounded-full mr-1 bg-gray-100 dark:bg-gray-500">
                        {this.props.user?.avatar && (
                          <Image
                            src={this.props.user?.avatar}
                            layout="fixed"
                            width="30"
                            height="30"
                            objectFit="cover"
                            className="rounded-full"
                          ></Image>
                        )}
                      </div>
                      <Text
                        textWidth="w-60"
                        truncate
                        style="text-gray-500 ml-1"
                      >
                        {this.props.user?.name || this.props.wallet}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <Text bold sub size="x-small" style="text-right">
                    Price
                  </Text>
                  <Text style="text-xl">
                    {this.state?.price.toString()}{" "}
                    {this.state.bnb ? "BNB" : "AFEN"}
                  </Text>
                </div>
              </Flex>
              <div className="mt-5">
                <Text bold sub size="x-small">
                  Description
                </Text>
                <Text style="md:text-sm">
                  {this.state.description || "---"}
                </Text>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    );
  }
}
