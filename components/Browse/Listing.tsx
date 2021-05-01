import React from "react";
import Card, { CardText } from "../Card";
import Flex from "../Flex";
import SubTitle from "../SubTitle";
import Title from "../Title";
import Text from "../Text";

interface Listing {
  title: string;
  subtitle: string;
  listing: any[];
}

export default function Listing({ subtitle, title, listing }: Listing) {
  return (
    <div className="mb-10">
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>

      <Flex style="mt-5">
        {listing.map((item, index) => (
          <Card
            key={index}
            style={`${(index > 0 && "mx-4") || "mr-4"} relative`}
          >
            <CardText style="flex justify-between items-end">
              <p>{item}</p>
              <Text>
                <Text style="text-xl">{item.name}</Text>
                <Text style="text-sm text-gray-500">
                  {item.governmentAuthority}
                </Text>
              </Text>
              <Text style="text-lg group-hover:text-afen-yellow">
                {item.price} ETH
              </Text>
            </CardText>
          </Card>
        ))}
      </Flex>
    </div>
  );
}
