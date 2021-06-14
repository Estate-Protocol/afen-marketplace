import React from "react";
import Container from "@/design-system/Container";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import Image from "next/image";
import SubTitle from "@/design-system/SubTitle";
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
    <Container page style="lg:h-screen">
      <div className="flex flex-wrap-reverse lg:flex-nowrap lg:h-4/5 justify-between">
        <div className="lg:w-2/6 flex flex-col">
          <Flex smAndUp spaceBetween wrap style="items-start mb-4 flex-nowrap">
            <div>
              <Title style="text-3xl">{art?.name}</Title>
              <Link href="/profile/artist">
                <div className="flex mt-1 cursor-pointer">
                  <div className="w-6 h-6 relative overflow-hidden rounded-full mr-1">
                    <Image
                      src={art?.owner.profileImage}
                      layout="fill"
                      objectFit="none"
                    ></Image>
                  </div>
                  <SubTitle style="text-gray-500">{art?.owner?.name}</SubTitle>
                </div>
              </Link>
            </div>
            <div className="mt-4">
              <Text sub size="x-small" style="md:text-right">
                {art?.auction ? "Current Bid" : "Price"}
              </Text>
              <Text style="text-xl md:text-3xl">
                {art?.price || art?.bids[0]} BNB
              </Text>
            </div>
          </Flex>
          <Text style="font-light md:text-sm">{art.description}</Text>
          <div className="mt-5">
            <TokenPageTabs
              bids={bids}
              history={tokenHistory}
              details={tokenDetails}
            />
          </div>

          <div className="mt-auto mb-10 md:mb-0 pt-6 ">
            <div className="flex justify-between">
              <Button type="primary" block>
                Bid
              </Button>
            </div>
          </div>
        </div>
        <div className="h-96 mb-10 lg:mb-0 lg:h-full w-full lg:w-4/6 md:ml-12">
          <div className="relative h-full min-w-full">
            <Image
              src={art.image.src}
              layout="fill"
              className="border-8 border-gray-900 rounded-lg overflow-hidden"
              objectFit="contain"
              objectPosition="fill"
              alt={art.image.alt}
            ></Image>
          </div>
        </div>
      </div>
    </Container>
  );
}
