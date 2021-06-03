import { DateTime } from "@/design-system/Date";
import Human from "@/types/Human";
import Text from "@/design-system/Text";
import React from "react";
import ListAvatar from "@/design-system/List/ListAvatar";

export interface TokenDetailsProps {
  owner: Human;
  creator: Human;
  created: string;
  mintDate: string;
  size?: string;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  medium?: string;
  weight?: string;
  material?: string;
  auctionDate?: string;
}

export default function TokenDetails({
  creator,
  owner,
  dimensions,
  created,
}: TokenDetailsProps) {
  return (
    <div className="mt-5">
      {/* <div className="my-5">
        <Text size="x-small" style="text-gray-400">
          Token
        </Text>
        <div className="inline-flex">
          <Text size="small">JogE4LNh...2Qq58fC</Text>
          <DuplicateIcon
            onClick={() => copyToClipboard("JogE4LNh...2Qq58fC")}
            className={`ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
            aria-hidden="true"
          />
        </div>
      </div> */}

      <div className="my-5">
        <Text size="x-small" style="text-gray-400">
          Royalty
        </Text>
        <Text size="small">10%</Text>
      </div>

      <div className="my-5">
        <Text size="x-small" style="text-gray-400">
          Medium
        </Text>
        <Text size="small">Oil on canvas</Text>
      </div>

      <div className="my-5">
        <Text size="x-small" style="text-gray-400">
          Dimension
        </Text>
        <Text size="small">
          {dimensions?.depth} × {dimensions?.width} cm × {dimensions?.height} cm
        </Text>
      </div>

      <div className="flex mt-8 border-t-2 border-gray-800">
        <div className="w-full flex mt-8 items-start">
          <ListAvatar image={owner.image}></ListAvatar>
          <div className="ml-2 w-full">
            <Text style="text-sm text-white font-light text-gray-400">
              {owner.firstName} {owner.lastName}
              <Text style="text-xs md:w-3/4 text-gray-400">
                <DateTime date={created} />
              </Text>
            </Text>
            <Text style="text-sm md:w-3/4">Owner</Text>
          </div>
        </div>
        <div className="w-full flex mt-8 items-start">
          <ListAvatar image={creator.image}></ListAvatar>
          <div className="ml-2 w-full">
            <Text style="text-sm text-white font-light text-gray-400">
              {creator.firstName} {creator.lastName}
              <Text style="text-xs md:w-3/4 text-gray-400">
                <DateTime date={created} />
              </Text>
            </Text>
            <Text style="text-sm md:w-3/4">Creator</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
