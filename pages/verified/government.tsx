import router from "next/router";
import React from "react";
import Card, { CardMedia, CardText } from "../../components/Card";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import Text from "../../components/Text";
import arts from "../../data";

export default function Government() {
  return (
    <Container style="mt-20">
      <div className="mb-10">
        <Title>Government Verified Listings</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5 flex-wrap">
          {arts.map((art, index) => (
            <Card
              style={`${(index > 0 && "mx-4") || "mr-4"} mb-10 relative`}
              key={index}
              onClick={() => router.push(`/token/${art.id}`)}
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
          ))}
        </Flex>
      </div>
    </Container>
  );
}
