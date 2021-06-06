import router from "next/router";
import React from "react";
import Card, { CardMedia, CardText } from "@/design-system/Card";
import Container from "@/design-system/Container";
import Flex from "@/design-system/Flex";
import SubTitle from "@/design-system/SubTitle";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import arts from "../data";

export default function AfricanArtist() {
  return (
    <Container style="mt-20">
      <div className="mb-10">
        <Title>By African Artists</Title>
        <SubTitle>Ut ipsum enim mollit veniam proident.</SubTitle>

        <Flex style="mt-5 flex-wrap">
          {arts.map((art, index) => (
            <Card
              style={`${index > 0 ? "mx-4" : "mr-4"} mb-10 relative`}
              key={index}
              onClick={() => router.push(`/token/${art.id}`)}
            >
              <CardMedia src={art.image.src} alt={art.image.src} />
              <CardText style="flex justify-between items-end bg-white dark:bg-afen-blue-light dark:text-white">
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
