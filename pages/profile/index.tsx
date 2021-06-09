import Container from "@/design-system/Container";
import TabsComponent from "@/design-system/Tab";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import { ProfileTab } from "@/pages/User";
import React, { useState } from "react";
import { copyToClipboard } from "utils/misc";
import { DuplicateIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Flex from "@/design-system/Flex";
import { UserProfile } from "@/pages/User/types/User";
import { FcCheckmark } from "react-icons/fc";

export default function UserProfilePage() {
  const user: UserProfile = {
    fullName: "Christina Henry",
    walletAddress: "VnF72axMyh4N8CACUVxMg8vNwZaXRlBjPJ36x8x5GF2NXEXYHvIrhvy",
  };

  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div
        className="w-screen h-80 relative"
        style={{ minHeight: "300px", height: "300px" }}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1622667042273-e0e54442440a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          }
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
          <Image
            src={
              "https://images.unsplash.com/photo-1622678460621-bd06864a4b55?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            }
            quality={100}
            layout="fill"
          ></Image>
        </div>
        <Title>
          {user.fullName ? user.fullName : `${user.firstName} ${user.lastName}`}
        </Title>
        <div className="inline-flex">
          <Text truncate textWidth="w-60" sub>
            {user.walletAddress}
          </Text>
          {copied ? (
            <FcCheckmark className="ml-2 h-5 w-5" />
          ) : (
            <DuplicateIcon
              onClick={() =>
                copyToClipboard("0xVMgscGYWTW9RYDnbgly3mPcayb0ddC", setCopied)
              }
              className={`ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      <Container style="mb-20">
        <Flex col>
          <div className="mx-auto">
            <div className="mt-16">
              <TabsComponent
                tabs={[
                  {
                    title: "Profile",
                    body: <ProfileTab data={user} />,
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
