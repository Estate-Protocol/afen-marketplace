import React from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import Link from "../../components/Link";

export default function index() {
  return (
    <Container style="mt-10 md:mt-20">
      <Title>Create NFT</Title>
      <SubTitle>Create, sell, resell afican art pieces.</SubTitle>

      <div className="md:w-2/5 mt-10">
        <Link href="/create/individual">
          <div className="px-8 py-6 group border border-almond hover:border-afen-yellow rounded-lg mb-5 cursor-pointer">
            <Text style="text-lg md:text-2xl mb-1 group-hover:text-afen-yellow">
              Individual artist
            </Text>
            <Text style="text-sm md:w-3/4">
              Available to all to list art pieces. Market is open to global
              customers.
            </Text>
          </div>
        </Link>

        <Link href="/create/verified">
          <div className="px-8 py-6 group border border-almond hover:border-afen-yellow rounded-lg mb-5 cursor-pointer">
            <Text style="text-lg md:text-2xl mb-1 group-hover:text-afen-yellow">
              African artist
            </Text>
            <Text style="text-sm md:w-3/4">
              Art curated by verified artist can list for initial sale. All art
              will automatically be agged as AFEN verfied african artist piece.
            </Text>
          </div>
        </Link>

        <div className="px-8 py-6 group border border-gray-500 rounded-lg mb-5 cursor-pointer">
          <Text style="text-lg md:text-2xl mb-1 text-gray-500">Government</Text>
          <Text style="text-sm md:w-3/4 text-gray-500">
            Government backed artificats and art. Contact the AFEN team to list
            under this section
          </Text>
        </div>
      </div>
    </Container>
  );
}
