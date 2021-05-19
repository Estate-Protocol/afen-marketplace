import { useRouter } from "next/router";
import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Text from "../../../components/Text";
import Image from "next/image";
import SubTitle from "../../../components/SubTitle";

// getStaticPaths
// getStaticProps

export default function Token() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Container style="pt-20 h-screen">
        <div className="flex h-4/5 justify-between">
          <div className="w-2/5 pr-10 flex flex-col">
            {/* <Text>{id}</Text> */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <Title>Minding my business</Title>
                <SubTitle style="text-gray-500">Yusuf Aina</SubTitle>
              </div>
              <div className="text-right">
                <Text style="text-white">
                  <span className="text-sm text-gray-500">Views: </span>
                  256
                </Text>
                <Text style="text-afen-yellow text-xl">1.2 BNB</Text>
              </div>
            </div>

            <Text style="font-light">
              A one of six-piece series reflecting on different aspects of the
              Covid-19 pandemic, from the less privileged to the high rates of
              daily deaths recorded causing an overwhelming panic and grief in
              the world. This series is a campaign act in favor of the voiceless
              and powerless.
            </Text>

            <Text style="bg-almond px-4 py-2 mt-5 rounded-full text-center font-light overflow-hidden dark:text-black">
              Verified Arfican Artist
            </Text>

            <div>
              <Text style="text-sm md:w-3/4 text-gray-100 mt-12 mb-2">
                Bids
              </Text>
              <hr className="text-gray-400 opacity-10 mb-3" />

              <div className="">
                <div className="w-full flex mb-1">
                  <div className="w-14 h-12 relative overflow-hidden rounded-full">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      }
                      layout="fill"
                      objectFit="none"
                      alt={"alt"}
                    ></Image>
                  </div>
                  <div className="ml-5 w-full">
                    <Text style="text-sm text-white font-bold">AdeolaIn</Text>
                    <Text style="text-sm md:w-3/4 text-gray-400 mb-6">
                      0.072 BNB
                    </Text>
                  </div>
                </div>

                <div className="w-full flex mb-1">
                  <div className="w-14 h-12 relative overflow-hidden rounded-full">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1540247110674-31e928ee852a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGFmcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      }
                      layout="fill"
                      objectFit="none"
                      alt={"alt"}
                    ></Image>
                  </div>
                  <div className="ml-5 w-full">
                    <Text style="text-sm text-white font-bold">MikeDean</Text>
                    <Text style="text-sm md:w-3/4 text-gray-400 mb-6">
                      0.043 BNB
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t">
              <div className="flex mb-3">
                <div className="w-12 h-12 relative overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    }
                    layout="fill"
                    objectFit="none"
                    alt={"alt"}
                  ></Image>
                </div>
                <div className="ml-5">
                  <Text style="text-sm dark:text-gray-600 group-hover:text-afen-yellow">
                    Highest Bid by{" "}
                    <span className="text-white font-bold">AdeolaIn</span>
                  </Text>
                  <Text style="text-sm md:w-3/4 text-gray-400 mb-6">
                    0.072 BNB
                  </Text>
                </div>
              </div>

              <div className="flex justify-between ">
                <button className="px-6 py-3 rounded-2xl bg-white dark:text-black font-semibold w-full">
                  Buy
                </button>
                <button className="px-6 py-3 rounded-2xl bg-blue-600 border-2 border-afen-blue-light dark:text-white font-semibold w-full ml-2">
                  Place a bid
                </button>
              </div>
            </div>
          </div>
          <div className="h-full w-3/5">
            <div className="relative h-full min-w-full">
              <Image
                src={"/minding-my-business.jpeg"}
                layout="fill"
                className="border-8 border-gray-900 rounded-lg overflow-hidden"
                objectFit="contain"
                objectPosition="fill"
                alt={"alt"}
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
