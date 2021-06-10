import { CardMedia, CardText, CardAvatar } from "@/design-system/Card";
import Flex from "@/design-system/Flex";
import Text from "@/design-system/Text";
import { ListGridItem } from "./types/ListGridItem";

interface HomeListingGridItemProps {
  item: ListGridItem;
  width?: string;
  onClick: () => void;
}

export default function HomeListingGridItem({
  item,
  width,
  onClick,
}: HomeListingGridItemProps) {
  return (
    <div
      className={`cursor-pointer shadow-sm border border-gray-300 dark:border-gray-700 rounded overflow-hidden ${
        width ? width : ""
      }`}
      onClick={onClick}
    >
      <div className="h-96 relative bg-afen-yellow">
        <CardMedia src={item.image.src} alt={item.image.src} />
      </div>
      <CardText>
        <Text
          textWidth="w-full"
          truncate
          style="text-md dark:text-gray-400 capitalize"
        >
          {item.name}
        </Text>
        <Text style="text-base font-semibold">
          {item.price} BNB
          {item.auction && item.bids.length && (
            <span className="text-gray-700 dark:text-gray-50 text-xs ml-2">
              ({item.bids.length} Bids)
            </span>
          )}
        </Text>
        <Flex style="mt-2">
          <CardAvatar image={item.owner.profileImage} />
          <Text style="text-sm text-gray-500">{item.owner.name}</Text>
        </Flex>
      </CardText>
    </div>
  );
}
