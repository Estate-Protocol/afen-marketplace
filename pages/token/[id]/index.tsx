import React from "react";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import Image from "next/image";
import TokenPageTabs from "@/pages/token";
import { BidProps } from "@/pages/token/TokenBids";
import { TokenHistoryProps } from "@/pages/token/TokenHistory";
import { TokenDetailsProps } from "@/pages/token/TokenDetails";
import Button from "@/design-system/Button";
import Link from "next/link";
import Flex from "@/design-system/Flex";
import { GetStaticPaths, GetStaticProps } from "next";
import data from "data";
import { ListGridItem } from "@/pages/Home/types/ListGridItem";
import { useRouter } from "next/router";

interface TokenPageProps {
  art: ListGridItem;
}

// getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const art = data.find((item) => item.id === id);

  if (!art) {
    return { notFound: true };
  }

  return { props: { art }, revalidate: 1 };
};

export default function Token({ art }: TokenPageProps) {
  const { isFallback } = useRouter();

  const bids: BidProps[] = [
    {
      name: "AdeolaIn",
      amount: 4.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Victor",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Odinak",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Odinak",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Odinak",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Odinak",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const tokenHistory: TokenHistoryProps[] = [
    {
      date: "05/04/2021 10:48:13",
      by: {
        address: "i03j2qT7UCQw9SD85qXPrE81",
        name: "Yusuf Aina",
      },
      event: "Minted",
    },
  ];

  const tokenDetails: TokenDetailsProps = {
    owner: {
      firstName: "Willie Porter",
      walletAddress: "cdm0GO1W3xMv0Oaxco",
      image:
        "https://images.unsplash.com/photo-1619535542157-77b5c650347d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    creator: {
      firstName: "Yusuf Aina",
      walletAddress: "O4Qi1ssZEvP2RNB4la",
    },
    dimensions: {
      width: 10,
      height: 42.1,
      depth: 4.3,
    },
    mintDate: "05/03/2021 01:42:13",
    created: "03/03/2021 01:42:13",
  };

  return isFallback ? (
    <div></div>
  ) : (
    <div className="w-screen md:h-screen overflow-hidden">
      <div className="flex flex-wrap lg:flex-nowrap justify-between">
      <div className="mb-5 lg:mb-0 w-full mt-10 py-10 md:mt-0 md:py-0 md:h-screen md:w-3/5 lg:w-4/6 pt-16 flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-500">
          <div className="h-96 md:h-5/6 w-full md:w-5/6 my-auto">
            <div className="relative h-full w-full">
              <Image
                src={art.image.src}
                layout="fill"
                className="overflow-hidden shadow-lg rounded-xl"
                objectFit="contain"
                objectPosition="fill"
                alt={art.image.alt}
              ></Image>
            </div>
          </div>
        </div>
        <div className="relative md:w-2/5 lg:w-2/6 sm:mt-16 md:mt-32 flex flex-col px-4 md:px-10 lg:px-16 mx-auto overflow-hidden">
          <Flex spaceBetween wrap style="items-start mb-4 flex-nowrap">
            <div>
              <Title style="text-2xl md:text-3xl font-semibold">{art?.name}</Title>
              <Link href="/profile/artist">
                <div className="flex items-end mt-1 cursor-pointer">
                  <div className="w-6 h-6 relative overflow-hidden rounded-full mr-1">
                    <Image
                      src={art?.owner.profileImage}
                      layout="fill"
                      objectFit="none"
                    ></Image>
                  </div>
                  <Text style="text-gray-500 ml-1">{art?.owner?.name}</Text>
                </div>
              </Link>
            </div>
            <div className="mt-4">
              <Text bold sub size="x-small" style="text-right">
                {art?.auction ? "Current Bid" : "Price"}
              </Text>
              <Text style="text-xl md:text-3xl">
                {art?.price || art?.bids[0]} BNB
              </Text>
            </div>
          </Flex>
          <div className="mt-3">
            <Text bold sub size="x-small">
              Description
            </Text>
            <Text style="md:text-sm">{art.description}</Text>
          </div>
          <div className="mt-5">
            <TokenPageTabs
              bids={bids}
              history={tokenHistory}
              details={tokenDetails}
            />
          </div>

          <div className="md:absolute md:left-0 md:bottom-0 w-full md:border-t dark:border-gray-700 bg-white dark:bg-afen-blue mt-auto mb-5 md:mb-0 py-6 md:py-8 md:px-10 lg:px-16">
            <Button type="primary" block>
              Bid
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
