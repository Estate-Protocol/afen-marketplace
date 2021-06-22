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
      className={`cursor-pointer border bg-gray-500 border-light-blue-500 dark:border-gray-700 overflow-hidden rounded-xl ${
        width ? width : "w-auto"
      }`}
      onClick={onClick}
    >
      <CardMedia src={item.image.src} alt={item.image.src} />
      <CardText>
        <Text
          textWidth="w-full"
          truncate
          style="text-xl font-medium dark:text-gray-400"
        >
          {item.name}
        </Text>
        <Flex style="mb-3 mt-1">
          <CardAvatar image={item.owner.profileImage} />
          <Text size="x-small" style="text-gray-500">
            {item.owner.name}
          </Text>
        </Flex>

        <Text style="font-semibold">
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
      </CardText>
    </div>
  );
}
