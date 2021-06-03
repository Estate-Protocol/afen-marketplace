import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button";
import Flex from "../Flex";
import Title from "../Title";
import Text from "../Text";
import SubTitle from "../SubTitle";

interface ListingSectionHeaderProps {
  title: string;
  subTitle?: string;
  action?: {
    text: string;
    onClick?: () => void;
  };
}

export default function ListingSectionHeader({
  title,
  subTitle,
  action,
}: ListingSectionHeaderProps) {
  return (
    <Flex spaceBetween>
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
      {action && (
        <Button type="plain" icon onClick={action.onClick}>
          <Text style="mr-2">{action.text}</Text>
          <BsArrowRight className="text-2xl" />
        </Button>
      )}
    </Flex>
  );
}
