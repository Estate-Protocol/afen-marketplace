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
      className={`cursor-pointer shadow-sm border-2 border-light-blue-500 dark:border-gray-700 overflow-hidden rounded-xl ${
        width ? width : "w-auto"
      }`}
      onClick={onClick}
    >
      <CardMedia src={item.image.src} alt={item.image.src} />
      <CardText>
        <Text
          textWidth="w-full"
          truncate
          style="text-xl font-medium dark:text-gray-400 capitalize"
        >
          {item.name}
        </Text>
        <Text style="text-base">
          {item.price} BNB
          {item.auction && item.bids.length && (
            <span className="text-gray-700 dark:text-gray-50 text-xs ml-1">
              ({item.bids.length} Bids)
            </span>
          )}
        </Text>
        {/* <Text textWidth="w-full" truncate sub size="x-small">
          {item.description}
        </Text> */}

        <Flex style="mt-6 md:mt-4">
          <CardAvatar image={item.owner.profileImage} />
          <Text style="text-base text-gray-500">{item.owner.name}</Text>
        </Flex>
      </CardText>
    </div>
  );
}
