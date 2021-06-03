import Container from "@/design-system/Container";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import Flex from "@/design-system/Flex";
import Card, { CardMedia, CardText } from "@/design-system/Card";
import arts from "../data";
import { useRouter } from "next/router";
import TabsComponent from "@/design-system/Tab";
import { BsArrowRight } from "react-icons/bs";
import Button from "@/design-system/Button";
import ListingSectionHeader from "@/design-system/ListingSectionHeader";

export default function Home() {
  const router = useRouter();

  return (
    <Container style="mt-20">
      {/* <Listing
        listing={arts.map((art) => art.verified == "government")}
        title="Government Verified Listings"
        subtitle="Ut ipsum enim mollit veniam proident."
      ></Listing> */}

      <div className="mb-10">
        <ListingSectionHeader
          title="AFEN x Ayobami Olakunle: Beyond Culture and Tribes"
          subTitle="Ends Jun 3 at 8:00pm +04"
          action={{ text: "View all" }}
        />
        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              art.verified === "government" && (
                <div
                  className={`${
                    (index > 0 && "mx-2") || "mr-2"
                  } shadow-md border border-gray-700 rounded`}
                >
                  <Card
                    style={` relative`}
                    key={index}
                    onClick={() => router.push(`/token/${art.id}`)}
                  >
                    <CardMedia src={art.image.src} alt={art.image.src} />
                  </Card>
                  <CardText style="flex justify-between items-end bg-white dark:bg-black dark:text-white overflow-hidden rounded-b">
                    <div>
                      <Text style="text-lg capitalize">{art.name}</Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </div>
                    <div className="text-right">
                      <Text size="x-small" style="text-gray-200">
                        {art.bids.length || 0} Bids
                      </Text>
                      <Text style="text-sm text-afen-yellow">
                        {art.price} BNB
                      </Text>
                    </div>
                  </CardText>
                </div>
              )
          )}
        </Flex>
      </div>

      <div className="my-10 mt-20">
        <ListingSectionHeader
          title="Live Auctions"
          action={{ text: "View all" }}
        />
        <Flex wrap>
          <Flex style="mt-5">
            <div
              className={`${"mr-5"} shadow-md border border-gray-700 rounded`}
            >
              <Card style={`relative`}>
                <CardMedia src={arts[0].image.src} alt={arts[0].image.src} />
              </Card>
            </div>
            <div>
              <Flex spaceBetween style="mb-3">
                <div>
                  <Title style="capitalize">{arts[0].name}</Title>
                  <Text sub size="small">
                    {arts[0].owner.name}
                  </Text>
                </div>
                <Text style="text-afen-yellow">{arts[0].price} BNB</Text>
              </Flex>
              <div className="mb-4">
                <Text sub>{arts[0].description}</Text>
                {/* <Text size="x-small" sub style="mt-1">
                  Auction ends in 10 hours
                </Text> */}
              </div>
              <Button
                type="plain"
                icon
                onClick={() => router.push(`/token/${arts[0].id}`)}
              >
                <Text style="mr-2">View</Text>
                <BsArrowRight className="text-2xl" />
              </Button>
            </div>
          </Flex>
          <Flex style="md:ml-5 mt-5">
            <div
              className={`${"mr-5"} shadow-md border border-gray-700 rounded`}
            >
              <Card style={`relative`}>
                <CardMedia src={arts[1].image.src} alt={arts[1].image.src} />
              </Card>
            </div>
            <div>
              <Flex spaceBetween style="mb-3">
                <div>
                  <Title style="capitalize">{arts[1].name}</Title>
                  <Text sub size="small">
                    {arts[1].owner.name}
                  </Text>
                </div>
                <Text style="text-afen-yellow">{arts[1].price} BNB</Text>
              </Flex>
              <div className="mb-4">
                <Text sub>{arts[0].description}</Text>
                {/* <Text size="x-small" sub style="mt-1">
                  Auction ends in 10 hours
                </Text> */}
              </div>
              <Button
                type="plain"
                icon
                onClick={() => router.push(`/token/${arts[1].id}`)}
              >
                <Text style="mr-2">View</Text>
                <BsArrowRight className="text-2xl" />
              </Button>
            </div>
          </Flex>
        </Flex>
      </div>

      <div className="my-10 mt-20">
        <ListingSectionHeader
          title="Newly Added"
          subTitle="Straight from the artist lab"
          action={{ text: "View all" }}
        />
        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              art.verified === "afen" && (
                <div
                  className={`${
                    (index > 0 && "mx-2") || "mr-2"
                  } shadow-md border border-gray-700 rounded`}
                >
                  <Card
                    style={`relative`}
                    key={index}
                    onClick={() => router.push(`/token/${art.id}`)}
                  >
                    <CardMedia src={art.image.src} alt={art.image.src} />
                  </Card>
                  <CardText style="flex justify-between items-end bg-white dark:bg-black dark:text-white overflow-hidden rounded-b">
                    <div>
                      <Text style="text-lg capitalize">{art.name}</Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </div>
                    <div className="text-right">
                      <Text size="x-small" style="text-gray-200">
                        {art.bids.length || 0} Bids
                      </Text>
                      <Text style="text-sm text-afen-yellow">
                        {art.price} BNB
                      </Text>
                    </div>
                  </CardText>
                </div>
              )
          )}
        </Flex>
      </div>

      <div className="mt-20 mb-10">
        <ListingSectionHeader title="Explore" action={{ text: "View all" }} />
        <TabsComponent
          tabs={[
            {
              title: "All",
              body: "",
            },
            {
              title: "Collections",
              body: "",
            },
            {
              title: "Auctions",
              body: "",
            },
          ]}
        />
        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              !art.verified && (
                <div
                  className={`${
                    (index > 0 && "mx-2") || "mr-2"
                  } shadow-md border border-gray-700 rounded`}
                >
                  <Card
                    style={`relative`}
                    key={index}
                    onClick={() => router.push(`/token/${art.id}`)}
                  >
                    <CardMedia src={art.image.src} alt={art.image.src} />
                  </Card>
                  <CardText style="flex justify-between items-end bg-white dark:bg-black dark:text-white overflow-hidden rounded-b">
                    <div>
                      <Text style="text-lg capitalize">{art.name}</Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </div>
                    <div className="text-right">
                      <Text size="x-small" style="text-gray-200">
                        {art.bids.length || 0} Bids
                      </Text>
                      <Text style="text-sm text-afen-yellow">
                        {art.price} BNB
                      </Text>
                    </div>
                  </CardText>
                </div>
              )
          )}
        </Flex>
      </div>
    </Container>
  );
}
