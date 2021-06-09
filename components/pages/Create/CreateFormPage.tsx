import React, { Component } from "react";
import Container from "@/design-system/Container";
import Title from "@/design-system/Title";
import SubTitle from "@/design-system/SubTitle";
import Text from "@/design-system/Text";
import { TextInput } from "@/design-system/Inputs";
import Flex from "@/design-system/Flex";
import Button from "@/design-system/Button";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import MenuDropdown from "@/design-system/MenuDropdown";

interface IProps {
  onSubmit: (data: IState) => void;
}

interface IState {
  price: number;
  upload: File | null;
  fixed: boolean;
  auction: boolean;
  minimmumBid?: number;
  startDate: string;
  endDate: string;
  serviceFee: number;
  title: string;
  description?: string;
  royalties?: number;
  properties?: {
    [key: string]: string;
  }[];
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
      fixed: true,
      auction: false,
      minimmumBid: 0,
      startDate: "",
      endDate: "",
      serviceFee: 0,
      title: "",
      description: "",
      properties: [],
    };
  }

  handlePriceSelection = () => {
    this.setState({ auction: !this.state.auction, fixed: !this.state.fixed });
  };

  handlePriceValue = (data: number) => {
    this.state.fixed
      ? this.setState({ price: data })
      : this.setState({ minimmumBid: data });
  };

  handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ upload: event.target.files[0] });
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

  render() {
    return (
      <Container style="mt-10 md:3/4 lg:w-2/3 md:mt-20 flex flex-wrap h-full">
        <div className="lg:pr-10">
          <Title>Create NFT</Title>
          <SubTitle style="md:w-3/4">
            You can set how you want your NFT sold in two formats, by setting a
            fixed price or auction. We will notify you anytime your art has been
            bought or a bid has been placed.
          </SubTitle>

          <form>
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
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium focus:outline-none focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-afen-yellow"
                              >
                                <span className="px-2">Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="fileUpload"
                                  type="file"
                                  className="sr-only"
                                  accept="image/*"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
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
                      Determine if the art can be bought at fixed price or put
                      it up for auction and set a minimum bid.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2 mb-0 sm:mb-10">
                  <div className="overflow-hidden">
                    <div className="px-4 sm:pb-6">
                      <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-6">
                          <div
                            className={`pb-6 group border-b border-gray-500 mb-2 cursor-pointer ${
                              this.state.fixed
                                ? "border-b border-afen-yellow"
                                : ""
                            }`}
                            onClick={this.handlePriceSelection}
                          >
                            <Text
                              style={`text-lg group-hover:text-afen-yellow ${
                                this.state.fixed ? "text-afen-yellow" : ""
                              }`}
                            >
                              Fixed
                            </Text>
                            <Text sub size="x-small" style="md:w-3/4">
                              Setting a fixed price means a user can buy your
                              NFT only at the price you set.
                            </Text>
                          </div>
                        </div>

                        <div className="col-span-6">
                          <div
                            className={`pb-6 group border-b border-gray-500 mb-2 cursor-pointer ${
                              this.state.auction
                                ? "border-b border-afen-yellow"
                                : ""
                            }`}
                            onClick={this.handlePriceSelection}
                          >
                            <Text
                              style={`text-lg group-hover:text-afen-yellow ${
                                this.state.auction ? "text-afen-yellow" : ""
                              }`}
                            >
                              Auction
                            </Text>
                            <Text sub size="x-small" style="md:w-3/4">
                              Users allowed to bid until you accept a final bid
                              you are interested in.
                            </Text>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <TextInput
                            label={this.state.fixed ? "Price" : "Minimum Bid"}
                            min={0}
                            value={
                              this.state.fixed
                                ? this.state.price
                                : this.state.minimmumBid
                            }
                            type="number"
                            placeholder="0.00"
                            prepend="BNB"
                            onChange={(e) => this.handlePriceValue(e)}
                          />
                        </div>

                        <div className="col-span-full">
                          <TextInput
                            label={"Royalties"}
                            min={0}
                            value={this.state.royalties}
                            type="number"
                            placeholder="%"
                            description="Percentage paid to you as the creator anytime any a transation is made on this art (Post Sale)"
                            onChange={(data) =>
                              this.setState({
                                royalties: parseFloat(data),
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

                  <div className="relative">
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
                  </div>
                </div>
              </div>
              <Flex style="mb-10">
                <Button
                  type="primary"
                  style="ml-auto mt-5"
                  onClick={() => this.props.onSubmit(this.state)}
                >
                  Create
                </Button>
              </Flex>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
