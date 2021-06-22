import Container from "@/design-system/Container";
import Text from "@/design-system/Text";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { GrMedium, GrInstagram, GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 dark:border-gray-800 px-4 py-10 md:py-20 mt-auto mx-auto flex align-middle tracking-wide">
      <Container>
        <div className="flex flex-wrap justify-between md:w-4/5 mb-10 md:mb-16">
          <div className="mb-10 md:mb-0">
            <a className="md:flex items-start">
              <Image src="/logo.png" width="50" height="50" />
              <div className="md:ml-2 font-weight-bold">
                <Text>
                  AFEN Art Marketplace &copy; {new Date().getFullYear()}
                </Text>
                <Text sub size="small" style="md:w-80 mt-1">
                  A leading hub for African Blockchain-related collaborations
                  with a focus on Decentralized Finance, Arts, Real Estate and
                  Education.
                </Text>
              </div>
            </a>
          </div>

          <div>
            <Text bold style="mb-2">Marketplace</Text>
            <ul>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Government
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Mint art
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Get Started
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Auction
                  </Text>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Text bold style="mb-2">Wallet</Text>
            <ul>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Collectibles
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Fund Wallet
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Profile
                  </Text>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Text sub size="small">
                    Settings
                  </Text>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Text bold style="mb-2">Links</Text>
            <ul>
              <li>
                <a href="https://afengroup.com/whitepaper/">
                  <Text sub size="small">
                    Whitepaper
                  </Text>
                </a>
              </li>
              <li>
                <a href="https://afengroup.com/token">
                  <Text sub size="small">
                    AFEN Token
                  </Text>
                </a>
              </li>
              <li>
                <a href="https://afengroup.com/partners">
                  <Text sub size="small">
                    Partners
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center border-t-2 dark:border-gray-800 pt-10 md:pt-20 pb-0 inline-flex md:justify-center w-full mx-auto">
          <a
            href="https://www.instagram.com/afenblockchain/"
            target="_blank"
            className="mr-5"
          >
            <GrInstagram className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/Afenblockchain?s=08"
            target="_blank"
            className="mr-5"
          >
            <GrTwitter className="text-2xl" />
          </a>
          <a href="mailto:afen@afengroup.com" target="_blank" className="mr-5">
            <HiOutlineMail className="text-2xl" />
          </a>
          <a href="https://t.me/afenupdates" target="_blank" className="mr-5">
            <FaTelegramPlane className="text-2xl" />
          </a>
          <a href="https://link.medium.com/dJY0veBUlgb" target="_blank">
            <GrMedium className="text-2xl" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
