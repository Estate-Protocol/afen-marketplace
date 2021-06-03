import Container from "@/design-system/Container";
import TabsComponent from "@/design-system/Tab";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import { ProfileTab } from "@/pages/User";
import React from "react";
import { copyToClipboard } from "utils/misc";
import { DuplicateIcon } from "@heroicons/react/solid";
import Flex from "@/design-system/Flex";
import Image from "next/image";

export default function UserProfile() {
  return (
    <Flex style="min-h-screen" start>
      <div className="md:w-2/5 h-screen relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          }
          layout="fill"
        ></Image>
      </div>

      <Container style="my-20 md:w-3/5">
        <div className="">
          <Title>Corey James</Title>
          <div className="inline-flex">
            <Text sub>0xVMgscGYWTW9RYDnbgly3mPcayb0ddC</Text>
            <DuplicateIcon
              onClick={() =>
                copyToClipboard("0xVMgscGYWTW9RYDnbgly3mPcayb0ddC")
              }
              className={`ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
              aria-hidden="true"
            />
          </div>

          <div className="mt-16">
            <TabsComponent
              tabs={[
                {
                  title: "Profile",
                  body: <ProfileTab />,
                },
                {
                  title: "Items",
                  body: "",
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </Flex>
  );
}
