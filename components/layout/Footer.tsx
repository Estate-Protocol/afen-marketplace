import Container from "@/design-system/Container";
import Text from "@/design-system/Text";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { GrMedium, GrInstagram, GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 dark:border-gray-800 px-4 py-8 md:pt-14 md:pb-10 mt-auto mx-auto flex align-middle tracking-wide">
      <Container>
        <Image src="/logo.png" layout="fixed" width="50" height="50" />
        <div className="lg:flex flex-wrap mb-10 md:mb-16">
          <div className="mb-8 lg:mb-0 md:w-full lg:w-1/4 md:mr-24 lg:mr-60">
            <a>
              <div className="font-weight-bold">
                <Text>
                  AFEN Art Marketplace &copy; {new Date().getFullYear()}
                </Text>
                <Text sub size="small" style="w-full mt-1">
                  A leading hub for African Blockchain-related collaborations
                  with a focus on Decentralized Finance, Arts, Real Estate and
                  Education.
                </Text>
              </div>
            </a>
          </div>

          <div className="md:mr-20 lg:mr-40 mb-8 lg:mb-0">
            <Text bold style="mb-2">
              Marketplace
            </Text>
            <ul>
              {/* <li>
                <Link href="/">
                  <Text sub size="small">
                    Government
                  </Text>
                </Link>
              </li> */}
              <li>
                <Text sub size="small">
                  <Link href="/create">Mint art</Link>
                </Text>
              </li>
              <li>
                <a href="/https://link.medium.com/d6ni1B0ATgb" target="_blank">
                  <Text sub size="small">
                    Get Started
                  </Text>
                </a>
              </li>
              {/* <li>
                <Link href="/">
                  <Text sub size="small">
                    Auction
                  </Text>
                </Link>
              </li> */}
            </ul>
          </div>

          {/* <div>
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
          </div> */}

          <div>
            <Text bold style="mb-2">
              Links
            </Text>
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
        <div className="text-center border-t-2 dark:border-gray-800 pt-5 md:pt-10 pb-0 inline-flex md:justify-center w-full mx-auto">
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
