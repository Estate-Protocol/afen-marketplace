import Container from "../components/Container";
import Link from "next/link";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Text from "../components/Text";
import Flex from "../components/Flex";
import Card, { CardMedia, CardText } from "../components/Card";
import arts from "../data";
import { useRouter } from "next/router";
// import { Listing } from "../components/Browse";

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
        <Title>Government Verified Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5">
          {arts.map(
            (art, index) =>
              art.verified === "government" && (
                <Card
                  style={`${(index > 0 && "mx-4") || "mr-4"} relative`}
                  key={index}
                  onClick={() => router.push(`/token/${index}`)}
                >
                  <CardMedia src={art.image.src} alt={art.image.src} />
                  <CardText style="flex justify-between items-end bg-white dark:bg-rich-black dark:text-white">
                    <div>
                      <Text style="text-xl group-hover:text-afen-yellow">
                        {art.name}
                      </Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </div>
                    <Text style="text-lg">{art.price} ETH</Text>
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
                  style={`${(index > 0 && "mx-4") || "mr-4"} relative`}
                  key={index}
                >
                  <CardMedia src={art.image.src} alt={art.image.src} />
                  <CardText style="flex justify-between items-end bg-white dark:bg-rich-black dark:text-white">
                    <div>
                      <Text style="text-xl group-hover:text-afen-yellow">
                        {art.name}
                      </Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </div>
                    <Text style="text-lg">{art.price} ETH</Text>
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
                <Card
                  style={`${(index > 0 && "mx-4") || "mr-4"} relative`}
                  key={index}
                >
                  <CardMedia src={art.image.src} alt={art.image.src} />
                  <CardText style="flex justify-between items-end bg-white dark:bg-rich-black dark:text-white">
                    <div>
                      <Text style="text-xl group-hover:text-afen-yellow">
                        {art.name}
                      </Text>
                      <Text style="text-sm text-gray-500">
                        {art.governmentAuthority}
                      </Text>
                    </div>
                    <Text style="text-lg">{art.price} ETH</Text>
                  </CardText>
                </Card>
              )
          )}
        </Flex>
      </div>
    </Container>
  );
}
