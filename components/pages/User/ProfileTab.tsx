import Flex from "@/design-system/Flex";
import { TextInput } from "@/design-system/Inputs";
import Text from "@/design-system/Text";
import React, { useState } from "react";
import SubTitle from "@/design-system/SubTitle";
import Button from "@/design-system/Button";
import { UserProfile } from "./types/User";

interface ProfileTabProps {
  data: UserProfile;
}

export default function ProfileTab({ data }: ProfileTabProps) {
  const [fullName, setFullName] = useState<string>(data.fullName);
  const [email, setEmail] = useState<string>(data.email);
  const [instagram, setInstagram] = useState<string>(data?.instragram?.url || "");
  const [twitter, setTwitter] = useState<string>(data?.twitter?.url || "");
  const [portfolioLink, setPortfolioLink] = useState<string>(data.portfolio);
  const [description, setDescription] = useState<string>(data.description);

  return (
    <div className="mt-5">
      <div className="mb-20">
        <div className="mb-5">
          <SubTitle plain>Personal Information</SubTitle>
          <Text sub size="x-small">
            Pariatur in dolor adipisicing velit anim et cillum culpa.
          </Text>
        </div>
        <Flex wrap>
          <TextInput
            label="Name"
            value={fullName}
            onChange={setFullName}
          ></TextInput>
          <div className="mx-auto md:mx-10"></div>
          <TextInput
            label="Email"
            value={email}
            type="text"
            onChange={setEmail}
          ></TextInput>
        </Flex>
        <TextInput
          label="Description"
          value={description}
          type="text"
          placeholder="A breif description about yourself"
          onChange={setDescription}
        ></TextInput>
      </div>
      <div>
        <div className="mb-5">
          <SubTitle plain>Socials and Links</SubTitle>
          <Text sub size="x-small">
            Pariatur in dolor adipisicing velit anim et cillum culpa.
          </Text>
        </div>
        <Flex spaceBetween wrap>
          <TextInput
            label="Instagram"
            placeholder="@"
            value={instagram}
            type="text"
            description="Laborum nulla dolor excepteur veniam pariatur et."
            onChange={setInstagram}
          ></TextInput>
          <div className="mx-auto md:mx-10"></div>
          <TextInput
            label="Twitter"
            value={twitter}
            placeholder="@"
            description="Laborum nulla dolor excepteur veniam pariatur et."
            type="text"
            onChange={setTwitter}
          ></TextInput>
        </Flex>
        <TextInput
          label="Link to Portfolio"
          value={portfolioLink}
          type="text"
          onChange={setPortfolioLink}
        ></TextInput>
        <Button>Save</Button>
      </div>
    </div>
  );
}
