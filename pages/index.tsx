import Container from "../components/Container";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Text from "../components/Text";
import Flex from "../components/Flex";
import Card, { CardText } from "../components/Card";
import arts from "../data";
// import { Listing } from "../components/Browse";

export default function Home() {
  return (
    <Container style="mt-20">
      {/* <Listing
        listing={arts.map((art) => art.verified == "government")}
        title="Government Verified Listings"
        subtitle="Ut ipsum enim mollit veniam proident."
      ></Listing> */}

      <div className="mb-10">
        <Title>Government Verified Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              art.verified === "government" && (
                <Card
                  key={index}
                  style={`${(index > 0 && "mx-4") || "mr-4"} relative`}
                >
                  <CardText style="flex justify-between items-end">
                    <Text>
                      <Text style="text-xl">{art.name}</Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </Text>
                    <Text style="text-lg group-hover:text-afen-yellow">
                      {art.price} ETH
                    </Text>
                  </CardText>
                </Card>
              )
          )}
        </Flex>
      </div>

      <div className="mb-10">
        <Title>AFEN Verified Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              art.verified === "afen" && (
                <Card
                  key={index}
                  style={`${(index > 0 && "mx-4") || "mr-4"} relative`}
                >
                  <CardText style="flex justify-between items-end">
                    <Text>
                      <Text style="text-xl">{art.name}</Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </Text>
                    <Text style="text-lg group-hover:text-afen-yellow">
                      {art.price} ETH
                    </Text>
                  </CardText>
                </Card>
              )
          )}
        </Flex>
      </div>

      <div className="mt-20 mb-10">
        <Title>Artist Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              !art.verified && (
                <Card key={index} style={`${(index > 0 && "mx-4") || "mr-4"}`}>
                  {""}
                </Card>
              )
          )}
        </Flex>
      </div>
    </Container>
  );
}
