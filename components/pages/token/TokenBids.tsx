import React from "react";
import Text from "@/design-system/Text";
import { ListItem } from "@/design-system/List";
import ListAvatar from "@/design-system/List/ListAvatar";

export interface BidProps {
  name: string;
  image?: string;
  amount: number;
  time?: Date | string;
}

export default function TokenBid({ name, image, amount }: BidProps) {
  return (
    <ListItem>
      <div className="flex items-start">
        <ListAvatar image={image}></ListAvatar>
        <div className="ml-2">
          <Text size="medium" bold>{amount} BNB</Text>
          <Text style="mt-1 sm:mt-0">{name}</Text>
          <Text sub size="x-small">
            June 16, 2021 10:12 PM
          </Text>
        </div>
      </div>
    </ListItem>
  );
}
