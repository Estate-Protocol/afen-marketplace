import Container from "../components/Container";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Flex from "../components/Flex";
import Card from "../components/Card";

export default function Home() {
  const cards = [
    {
      name: "Curtis Flores",
    },
    {
      name: "Lina Poole",
    },
    {
      name: "Jean Daniel",
    },
    {
      name: "Winifred Blake",
    },
    {
      name: "Peter Burton",
    },
    {
      name: "Roy Reed",
    },
  ];

  return (
    <Container style="mt-20">
      <div className="mb-10">
        <Title>Verified Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5">
          {cards.map((card, index) => (
            <Card style={(index > 0 && "mx-4") || "mr-4"}>{""}</Card>
          ))}
        </Flex>
      </div>

      <div className="mt-20 mb-10">
        <Title>Artist Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5">
          {cards.map((card, index) => (
            <Card style={(index > 0 && "mx-4") || "mr-4"}>{""}</Card>
          ))}
        </Flex>
      </div>
    </Container>
  );
}
