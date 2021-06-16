import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/design-system/Container";
import Flex from "@/components/design-system/Flex";
import TabsComponent from "@/components/design-system/Tab";
import Title from "@/components/design-system/Title";
import Text from "@/components/design-system/Text";
import { UserDetails } from "@/components/User";
import { DuplicateIcon } from "@heroicons/react/solid";
import { FcCheckmark } from "react-icons/fc";
import { copyToClipboard, parseUrl } from "utils/misc";
import { ProfileTab } from "../User";
import Button from "@/components/design-system/Button";
import { GrInstagram, GrTwitter } from "react-icons/gr";

interface UserProfilePageProps {
  data: UserDetails;
}

export const UserProfilePage: React.FC<UserProfilePageProps> = ({ data }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div
        className="w-screen  h-80 relative bg-gray-400"
        style={{ minHeight: "300px", height: "380px" }}
      >
        {data?.user?.banner && (
          <Image
            src={data.user.banner}
            objectFit="cover"
            quality={100}
            layout="fill"
          ></Image>
        )}
        <Button style="absolute bottom-5 right-10" plain>
          Change Picture
        </Button>
      </div>

      {data.user?.twitter && (
        <>
          <a className="inline-flex items-center" href={data.user?.twitter}>
            <GrTwitter className="text-sm text-blue-500 mr-1" />
            <Text sub size="small">
              @{parseUrl(data.user?.twitter)}
            </Text>
          </a>
        </>
      )}
      {data.user?.instragram && (
        <>
          <a className="inline-flex items-center" href={data.user?.twitter}>
            <GrInstagram className="text-sm text-pink-400 mr-1" />
            <Text sub size="small">
              @{parseUrl(data.user?.instragram)}
            </Text>
          </a>
        </>
      )}

      <div className="text-center flex flex-col items-center">
        <div
          className="rounded-full h-40 w-40 shadow-md p-2 ring-4 ring-afen-yellow flex items-center justify-center relative overflow-hidden -mt-20 mb-10"
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
        <Title>{data.user?.name || "..."}</Title>
        <div className="inline-flex">
          <Text truncate textWidth="w-60" sub>
            {data.address}
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

      <Container style="mb-20 w-screen">
        <div className="mt-16 md:w-1/3 mx-auto">
          <TabsComponent
            tabs={[
              {
                title: "Profile",
                body: <ProfileTab data={data.user} />,
              },
            ]}
          />
        </div>
      </Container>
    </div>
  );
};

UserProfilePage.displayName = "UserProfilePage";
export default UserProfilePage;
