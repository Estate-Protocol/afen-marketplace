import Image from "next/image";
import Link from "next/link";
import Button from "@/design-system/Button";
import React, { useState } from "react";
import UserDropdownMenu from "@/design-system/UserDropdownMenu";
import { navigationLinks, userLinksMobile } from "../../constants/links";
import data from "data";
import { DuplicateIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Flex from "@/design-system/Flex";
import Text from "@/design-system/Text";
import { FcCheckmark } from "react-icons/fc";
import { copyToClipboard } from "utils/misc";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useUser from "hooks/useUser";

const Header: React.FC = ({}: any) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const {
    account,
    balance,
    connectWallet,
    disconnectWallet,
    mobileWalletConnect,
  } = useUser();

  const user = account
    ? {
        account,
        balance: balance.toString(),
        profileImage: data[4].image.src,
      }
    : null;

  return (
    <div className="fixed w-full z-50 bg-white dark:bg-afen-blue px-4 md:px-10 lg:px-16 py-4 mx-auto border-b-2 dark:border-gray-800 flex items-center">
      <div className="mr-auto">
        <Link href="/">
          <a className="flex items-center" onClick={() => setMobileMenu(false)}>
            <Image src="/logo.png" width="30" height="30" />
            <p className="ml-1 md:ml-2 font-weight-medium text-xl text-black dark:text-white tracking-tight">
              Marketplace
            </p>
          </a>
        </Link>
      </div>

      <div className="ml-auto border-r-2 dark:border-gray-700 pr-2 md:pr-4">
        {theme === "dark" ? (
          <SunIcon
            className="h-6 cursor-pointer text-yellow-200"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        ) : (
          <MoonIcon
            className="h-6 cursor-pointer text-blue-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        )}
      </div>
      <div className="hidden md:flex items-center">
        {navigationLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <Button type="plain" style="mx-4">
              {link.label}
            </Button>
          </Link>
        ))}
        {account ? (
          <UserDropdownMenu
            data={user}
            walletAddressIsCopied={copied}
            onCopyWalletAddress={setCopied}
            onDisconnectWallet={disconnectWallet}
          />
        ) : (
          <Button onClick={connectWallet} type="primary">
            Connect Wallet
          </Button>
        )}
      </div>

      <div className="ml-2 md:hidden">
        {mobileMenu ? (
          <XIcon
            className="w-6 fill-current text-dark dark:text-white"
            onClick={() => setMobileMenu(false)}
          />
        ) : (
          <MenuIcon
            className="w-6 fill-current text-dark dark:text-white"
            onClick={() => setMobileMenu(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden fixed top-16 right-0 w-screen h-screen bg-black dark:bg-afen-blue bg-opacity-40 dark:bg-opacity-60">
          <Flex
            col
            style="w-full bg-white dark:bg-rich-black rounded-b-3xl shadow-2xl px-4 z-40 md:px-10 lg:px-16 pt-4 pb-6"
          >
            <div className="w-full">
              {user && (
                <>
                  <Flex
                    start
                    style="mb-3 pb-4 border-b dark:border-gray-800 overflow-hidden w-full"
                  >
                    <div className="mr-3">
                      <Image
                        src={user.profileImage}
                        layout="fixed"
                        width="60"
                        height="60"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <Text size="x-small" sub style="-mb-1">
                        Wallet
                      </Text>
                      <div className="inline-flex">
                        <Text textWidth="w-60" bold truncate>
                          {user.account}
                        </Text>
                        {copied ? (
                          <FcCheckmark className="ml-2 h-5 w-5" />
                        ) : (
                          <DuplicateIcon
                            onClick={() =>
                              copyToClipboard(user.account, setCopied)
                            }
                            className={`${
                              open ? "" : "text-opacity-70"
                            } ml-2 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="">
                        {/* <Text size="x-small" sub style="-mb-1">
                          Balance
                        </Text> */}
                        <Text bold sub>
                          {user.balance}{" "}
                          <span className="text-sm font-normal text-gray-600">
                            ETH
                          </span>
                        </Text>
                      </div>
                    </div>
                  </Flex>
                  <div className="w-full text-righ mb-3">
                    {userLinksMobile.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <Button
                          size="large"
                          type="plain"
                          style="block"
                          onClick={() => setMobileMenu(false)}
                        >
                          <Text style="text-lg mb-1">{link.label}</Text>
                        </Button>
                      </Link>
                    ))}
                  </div>
                </>
              )}
              <div className="w-full">
                {navigationLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <Button
                      type="plain"
                      size="large"
                      onClick={() => setMobileMenu(false)}
                    >
                      <Text sub style="text-md">
                        {link.label}
                      </Text>
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <Button
              type="primary"
              block
              style="mt-2 w-full"
              onClick={
                user
                  ? () => {
                      router.push("/create");
                      setMobileMenu(false);
                    }
                  : () => mobileWalletConnect.walletConnectInit()
              }
            >
              {user ? "Create" : "Connect Wallet"}
            </Button>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default Header;
