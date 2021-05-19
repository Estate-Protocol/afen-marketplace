import React, { ChangeEvent, Component } from "react";
import Container from "../Container";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Text from "../Text";
import Card, { CardText } from "../Card";
import { useRouter } from "next/router";

interface IProps {
  verified?: boolean;
}

interface IState {
  price: number;
  upload: File | string;
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
    size: string;
    value: string;
  };
}

export default class CreateForm extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      upload: "File",
      fixed: true,
      auction: false,
      minimmumBid: 0,
      startDate: "",
      endDate: "",
      serviceFee: 0,
      title: "",
      description: "",
    };
  }

  handlePriceSelection = () => {
    this.setState({ auction: !this.state.auction, fixed: !this.state.fixed });
  };

  handlePriceValue = (e) => {
    this.state.fixed
      ? this.setState({ price: parseFloat(e.target.value) })
      : this.setState({ price: parseFloat(e.target.value) });
  };

  render() {
    return (
      <Container style="mt-10 md:mt-20 flex flex-wrap h-full">
        <div className="lg:w-2/3 lg:pr-10">
          <Title>Create NFT</Title>
          <SubTitle>Mint your art</SubTitle>
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
                <form>
                  <div className="shadow border border-gray-100 border-opacity-20 sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-afen-blue-light space-y-6 sm:p-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Upload file
                        </label>
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
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span className="px-2">Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                    {this.props.verified
                      ? "Determine if the art can be bought at fixed price or put it up for auction and set a minimum bid."
                      : "Set a fixed price for your art"}
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2  mb-0 sm:mb-10">
                <form>
                  <div className="shadow overflow-hidden border border-gray-100 border-opacity-20 sm:rounded-md">
                    <div className="px-4 py-5 bg-afen-blue-light sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-full">
                          <div
                            className={`px-8 py-6 group border border-white rounded-lg mb-2 cursor-pointer ${
                              this.state.fixed && "border-2 border-afen-yellow"
                            }`}
                            onClick={
                              this.props.verified && this.handlePriceSelection
                            }
                          >
                            <Text
                              style={`text-lg group-hover:text-afen-yellow ${
                                this.state.fixed && "text-afen-yellow"
                              }`}
                            >
                              Fixed
                            </Text>
                            <Text style="text-sm md:w-3/4">
                              Art curated by verified artist can list for
                              initial sale.
                            </Text>
                          </div>
                        </div>
                        {this.props.verified && (
                          <div className="col-span-full">
                            <div
                              className={`px-8 py-6 group border border-white rounded-lg mb-2 cursor-pointer ${
                                this.state.auction &&
                                "border-2  border-afen-yellow"
                              }`}
                              onClick={this.handlePriceSelection}
                            >
                              <Text
                                style={`text-lg group-hover:text-afen-yellow ${
                                  this.state.auction && "text-afen-yellow"
                                }`}
                              >
                                Auction
                              </Text>
                              <Text style="text-sm md:w-3/4">
                                Art curated by verified artist can list for
                                initial sale.
                              </Text>
                            </div>
                          </div>
                        )}

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-300"
                          >
                            {this.state.fixed ? "Price" : "Minimum Bid"}
                          </label>
                          <input
                            type="number"
                            min={0}
                            name="price"
                            id="price"
                            placeholder="0.00"
                            className="mt-2 px-4 border bg-afen-blue text-white border-white py-4 focus:border-afen-yellow block w-full sm:text-sm font-semibold rounded-md"
                            onChange={(e) => this.handlePriceValue(e)}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="royalties"
                            className="block text-sm font-medium text-gray-300"
                          >
                            Royalties
                          </label>
                          <input
                            type="number"
                            min={0}
                            name="royalties"
                            id="royalties"
                            placeholder="%"
                            className="mt-2 px-4 border bg-afen-blue text-white border-white py-4 focus:border-afen-yellow block w-full sm:text-sm font-semibold rounded-md"
                            onChange={(e) =>
                              this.setState({
                                royalties: parseFloat(e.target.value),
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                <form>
                  <div className="shadow overflow-hidden border border-gray-100 border-opacity-20 sm:rounded-md">
                    <div className="px-4 py-5 bg-afen-blue-light space-y-6 sm:p-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="mt-2 px-4 border bg-afen-blue text-white border-white py-4 focus:border-afen-yellow block w-full sm:text-sm font-semibold rounded-md"
                          onChange={(e) =>
                            this.setState({
                              title: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Description (Optional)
                        </label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          placeholder="This comes with items displayed ..."
                          className="mt-2 px-4 border bg-afen-blue text-white border-white py-4 focus:border-afen-yellow block w-full sm:text-sm font-semibold rounded-md"
                          onChange={(e) =>
                            this.setState({
                              description: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="px-6 py-3 rounded-2xl bg-white dark:text-black hover:text-afen-yellow font-semibold mt-5"
                    // onClick={() => router.push("/wallet/connect")}
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block lg:w-1/3 border-l border-gray-50 border-opacity-20 pl-10">
          <Card style="mb-10 relative">
            <CardText style="flex justify-between items-end">
              <div>
                <Text style="text-xl">{this.state.title}</Text>
                {/* <Text style="text-sm text-gray-500">Authority/Owner</Text> */}
              </div>
              <div className="dark:text-white">
                {(this.state.price !== 0 || this.state.minimmumBid !== 0) && (
                  <Text style="text-lg group-hover:text-afen-yellow text-right">
                    {this.state?.price || this.state?.minimmumBid} BNB
                  </Text>
                )}
                {(this.state.auction ||
                  (this.state.fixed && this.state.price !== 0)) && (
                  <Text style="text-sm text-gray-500 text-right">
                    {this.state.auction ? "Minimum bid" : "Price"}
                  </Text>
                )}
              </div>
            </CardText>
          </Card>

          {this.state.description && (
            <div>
              <Text style="mt-10 text-lg tracking-tight">Description</Text>
              <Text style="text-sm mb-10 text-gray-400">
                {this.state.description}
              </Text>
            </div>
          )}
        </div>
      </Container>
    );
  }
}
