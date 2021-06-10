import { ListGridItem } from "./types/ListGridItem";
import { useRouter } from "next/router";
import HomeListingGridItem from "./HomeListingGridItem";

interface HomeListingGridProps {
  data: ListGridItem[];
}

export default function HomeListingGrid({ data }: HomeListingGridProps) {
  const router = useRouter();

  return (
    <div className="mt-10 mb-20 grid grid-flow-row auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 gap-x-4 xl:gap-x-5 gap-y-16">
      {data.map((item, index) => (
        <HomeListingGridItem
          item={item}
          key={index}
          onClick={() => router.push(`/token/${item.id}`)}
        />
      ))}
    </div>
  );
}
