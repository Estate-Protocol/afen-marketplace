import Container from "@/design-system/Container";
import arts from "../data";
import TabsComponent from "@/design-system/Tab";
import ListingSectionHeader from "@/design-system/ListingSectionHeader";
import HomeListingGrid from "@/pages/Home";

export default function Home() {
  return (
    <Container page>
      {/* <div className="mb-10">
        <ListingSectionHeader
          title="AFEN x ConservatioNFT: Preserving Nature"
          subTitle="Ends Jun 3 at 8:00pm +04"
        />
        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              art.verified === "government" && (
                <div className="mr-4">
                  <HomeListingGridItem
                    item={art}
                    key={index}
                    width="w-96"
                    onClick={() => router.push(`/token/${art.id}`)}
                  />
                </div>
              )
          )}
        </Flex>
      </div> */}

      <div className="mb-10">
        <ListingSectionHeader title="Explore" />
        <HomeListingGrid data={arts} />
        {/* <TabsComponent
          tabs={[
            {
              title: "All",
              body: <HomeListingGrid data={arts} />,
            },
            {
              title: "Collections",
              body: "",
              disabled: true,
            },
            {
              title: "Auctions",
              body: "",
              disabled: true,
            },
          ]}
        /> */}
      </div>
    </Container>
  );
}
