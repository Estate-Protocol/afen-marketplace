import { useRouter } from "next/router";
import React from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import Text from "../../../components/Text";

// getStaticPaths
// getStaticProps

export default function id({ param }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Container style="bg-gray-900 text-white px-10 py-2">
        <Text>{id}</Text>
      </Container>
    </div>
  );
}
