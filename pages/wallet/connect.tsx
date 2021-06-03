import React from "react";
import Container from "@/design-system/Container";
import Text from "@/design-system/Text";

export default function index() {
  return (
    <Container style="mt-10 md:mt-20 h-full flex flex-col items-center justify-between">
      {/* <Title>Create NFT</Title>
      <SubTitle>Create, sell, resell afican art pieces.</SubTitle> */}

      <div className="md:w-2/5 my-auto">
        <div className="px-8 py-6 group border border-almond hover:border-afen-yellow rounded-lg mb-5 cursor-pointer">
          <Text style="text-lg md:text-2xl mb-1 group-hover:text-afen-yellow">
            Connect Wallet
          </Text>
          <Text style="text-sm md:w-3/4">
            Connect your BSC wallet, to update to buy, sell or resell NFT
          </Text>
        </div>
      </div>
    </Container>
  );
}
