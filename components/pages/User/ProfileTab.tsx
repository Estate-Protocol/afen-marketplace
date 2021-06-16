// import Flex from "@/design-system/Flex";
import { TextInput } from "@/design-system/Inputs";
import Text from "@/design-system/Text";
import React, { useState } from "react";
import SubTitle from "@/design-system/SubTitle";
import Button from "@/design-system/Button";
import { User } from "@/components/User/types/User";

interface ProfileTabProps {
  data: User;
}

export default function ProfileTab({ data }: ProfileTabProps) {
  const [name, setName] = useState<string>(data?.name || "");
  const [email, setEmail] = useState<string>(data?.email || "");
  const [instagram, setInstagram] = useState<string>(data?.instragram || "");
  const [twitter, setTwitter] = useState<string>(data?.twitter || "");
  const [portfolioLink, setPortfolioLink] = useState<string>(
    data?.portfolio || ""
  );
  const [description, setDescription] = useState<string>(
    data?.description || ""
  );

  return (
    <div className="mt-5 w-full">
      <div className="mb-20">
        <div className="mb-5">
          <SubTitle plain>Personal Information</SubTitle>
        </div>
        {/* <Flex wrap> */}
        <TextInput label="Name" value={name} onChange={setName}></TextInput>
        <div className="mx-auto md:mx-10"></div>
        <TextInput
          label="Email"
          value={email}
          type="text"
          onChange={setEmail}
        ></TextInput>
        {/* </Flex> */}
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
            Connecting your socials could increase engagements.
          </Text>
        </div>
        {/* <Flex spaceBetween wrap> */}
        <TextInput
          label="Instagram"
          placeholder="@"
          value={instagram}
          type="text"
          // description="Laborum nulla dolor excepteur veniam pariatur et."
          onChange={setInstagram}
        ></TextInput>
        <div className="mx-auto md:mx-10"></div>
        <TextInput
          label="Twitter"
          value={twitter}
          placeholder="@"
          // description="Laborum nulla dolor excepteur veniam pariatur et."
          type="text"
          onChange={setTwitter}
        ></TextInput>
        {/* </Flex> */}
        <TextInput
          label="Link to Portfolio"
          value={portfolioLink}
          type="text"
          onChange={setPortfolioLink}
        ></TextInput>
        <Button size="large" style='mt-4'>Save</Button>
      </div>
    </div>
  );
}
