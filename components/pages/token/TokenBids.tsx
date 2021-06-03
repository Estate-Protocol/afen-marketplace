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

export default function Bid({ name, image, amount }: BidProps) {
  return (
    <ListItem>
      <div className="w-full flex items-end">
        <ListAvatar image={image}></ListAvatar>
        <div className="ml-3 w-full">
          <Text style="text-sm text-white font-bold">{name}</Text>
          <Text style="text-sm md:w-3/4 text-gray-400">{amount} BNB</Text>
        </div>
      </div>
    </ListItem>
  );
}
