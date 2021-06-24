import Button from "@/components/design-system/Button";
import Container from "@/components/design-system/Container";
import Title from "@/components/design-system/Title";
import Text from "@/components/design-system/Text";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Flex from "@/components/design-system/Flex";
import useUser from "hooks/useUser";
import Image from "next/image";

export default function ConnectWalletPage() {
  const { user, connectWallet } = useUser();

  return (
    <Container page style="md:w-2/3 lg:w-2/5 mx-auto">
      <div className="my-24">
        <Title>Connect Your Wallet</Title>
        <Image
          src="/metamask.svg"
          width="100"
          height="100"
          layout="fixed"
        ></Image>
        <Text sub style="mt-2">
          Think of wallets as your physical wallet or purse but in this case it
          is keeps digital currencies (cryptocurrencies). Connecting your
          wallets will help you buy, bid or create NFTs. We use MetaMask to
          connect your wallet,{" "}
          <a
            href="https://afenblockchain.medium.com/afen-art-marketplace-getting-started-on-nfts-f34575cb659b"
            className="text-black dark:text-afen-yellow underline"
          >
            get started.
          </a>
        </Text>
        <div className="mt-8">
          <Button size="large" onClick={connectWallet}>
            <Flex>
              <Text>Connect Wallet</Text>
              <BsArrowRight className="ml-2 text-xl md:text-2xl" />
            </Flex>
          </Button>
        </div>
      </div>
    </Container>
  );
}
