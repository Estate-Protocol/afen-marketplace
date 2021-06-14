import { DateTime } from "@/design-system/Date";
import { ListItem } from "@/design-system/List";
import ListAvatar from "@/design-system/List/ListAvatar";
import Text from "@/design-system/Text";
import React from "react";

export interface TokenHistoryProps {
  date: Date | string;
  by: {
    address: string;
    name?: string;
    profileImage?: string;
  };
  event: string;
}

export default function TokenHistory({ by, date, event }: TokenHistoryProps) {
  // const eventMessage = () => {};

  return (
    <ListItem hover>
      <div className="w-full flex my-1 items-end">
        <ListAvatar image={by.profileImage}></ListAvatar>

        <div className="ml-5 w-full">
          <Text style="text-sm">
            {event} by {by.name}
          </Text>
          <Text style="text-sm md:w-3/4 text-gray-400">
            <DateTime date={date} />
          </Text>
        </div>
      </div>
    </ListItem>
  );
}
