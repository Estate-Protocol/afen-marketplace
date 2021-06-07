import Container from "@/design-system/Container";
import TabsComponent from "@/design-system/Tab";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import React from "react";
import { copyToClipboard, parseUrl } from "utils/misc";
import { DuplicateIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Flex from "@/design-system/Flex";
import { ArtistProfile } from "@/pages/ArtistProfile/types/ArtistProfile";
import { GrInstagram, GrTwitter } from "react-icons/gr";

// interface ArtistProfilePageProps {
//   data: ArtistProfile;
// }

export default function ArtistProfilePage() {
  const artist: ArtistProfile = {
    fullName: "Yusuf Aina",
    walletAddress: "VnF72axMyh4N8CACUVxMg8vNwZaXRlBjPJ36x8x5GF2NXEXYHvIrhvy",
    collections: [],
    sold: [],
    profileImage:
      "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    bannerImage:
      "https://images.unsplash.com/photo-1567536894065-1d8a627a9561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG5pZ2VyaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    twitter: {
      url: "https://twitter.com/Afenblockchain?s=08",
      handle: "Afenblockchain",
    },
  };

  return (
    <div>
      <div
        className="w-screen h-80 relative"
        style={{ minHeight: "300px", height: "300px" }}
      >
        <Image
          src={artist.bannerImage}
          objectFit="cover"
          quality={100}
          layout="fill"
        ></Image>
      </div>

      <div className="text-center flex flex-col items-center">
        <div
          className="rounded-full h-40 w-40 shadow-md p-2 ring-2 ring-afen-yellow flex items-center justify-center relative overflow-hidden -mt-20 mb-10"
          style={{ width: "160px", height: "160px", marginTop: "-80px" }}
        >
          <Image src={artist.profileImage} quality={100} layout="fill"></Image>
        </div>
        <Title>
          {artist.fullName
            ? artist.fullName
            : `${artist.firstName} ${artist.lastName}`}
        </Title>
        <div className="inline-flex mb-5">
          <Text truncate textWidth="w-60" sub>
            {artist.walletAddress}
          </Text>
          <DuplicateIcon
            onClick={() => copyToClipboard("0xVMgscGYWTW9RYDnbgly3mPcayb0ddC")}
            className={`ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
            aria-hidden="true"
          />
        </div>
        {artist.twitter && (
          <>
            <a className="inline-flex items-center" href={artist.twitter.url}>
              <GrTwitter className="text-sm text-blue-500 mr-1" />
              <Text sub size="small">
                @{parseUrl(artist.twitter.handle)}
              </Text>
            </a>
          </>
        )}
        {artist.instragram && (
          <>
            <a className="inline-flex items-center" href={artist.twitter.url}>
              <GrInstagram className="text-sm text-blue-500 mr-1" />
              <Text sub size="small">
                @{parseUrl(artist.instragram.handle)}
              </Text>
            </a>
          </>
        )}
      </div>

      <Container style="mb-20">
        <Flex col>
          <div className="mx-auto">
            <div className="mt-16">
              <TabsComponent
                tabs={[
                  {
                    title: "Collections",
                    disabled: true,
                    body: "",
                  },
                  {
                    title: "Sold",
                    disabled: true,
                    body: "",
                  },
                ]}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}
