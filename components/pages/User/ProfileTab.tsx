import Flex from "@/design-system/Flex";
import { TextInput } from "@/design-system/Inputs";
import Text from "@/design-system/Text";
import React, { useState } from "react";
import SubTitle from "@/design-system/SubTitle";
import Button from "@/design-system/Button";

export default function ProfileTab() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");
  const [portfolioLink, setPortfolioLink] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
