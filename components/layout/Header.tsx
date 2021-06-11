import Image from "next/image";
import Link from "@/design-system/Link";
import Button from "@/design-system/Button";
import React, { useState } from "react";
import UserDropdownMenu from "@/design-system/UserDropdownMenu";
import { ethers } from "ethers";
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

export default function Header() {
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [balance, setBalance] = useState("0.00");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const fetchUser = async () => {
    try {
      // @ts-ignore
      if (window.ethereum.isConnected()) {
        await getAccounts();
      } else {
        window.alert("Please install Metamask");
      }
    } catch (err) {
      // TODO: use notificationo
      window.alert("You need to allow MetaMask.");
    }
  };

  const getAccounts = async () => {
    // @ts-ignore
    await window.ethereum.enable();

    // @ts-ignore
    // const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccounts(accounts);
    return await getBalance();
  };

  const getBalance = async () => {
    if (accounts) {
      // TODO: make provider accessible across entire app
      // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      let balance = await provider.getBalance(accounts[0]);

      return setBalance(ethers.utils.formatEther(balance));
    }
  };

  const connectWallet = async () => {
    await fetchUser();
  };

  const user = accounts?.length
    ? {
        account: accounts[0],
        balance,
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
      <div className="hidden md:block">
        {navigationLinks.map((link) => (
          <Link href={link.href}>
            <Button type="plain" style="mx-4">
              {link.label}
            </Button>
          </Link>
        ))}
        {accounts?.length ? (
          <UserDropdownMenu
            data={user}
            walletAddressIsCopied={copied}
            onCopyWalletAddress={setCopied}
          />
        ) : (
          <Button
            onClick={connectWallet} // TODO: Handle no connection
            type="primary"
          >
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
        <div className="md:hidden absolute top-16 right-0 w-screen h-screen bg-white dark:bg-rich-black z-40 px-4 md:px-10 lg:px-16 py-4">
          <Flex col style="w-full h-full pb-16">
            <div className="w-full">
              {user && (
                <>
                  <Flex style="mb-3 pb-4 border-b border-gray-800 overflow-hidden w-full">
                    <div className="mr-2">
                      <Image
                        src={user.profileImage}
                        layout="fixed"
                        width="50"
                        height="50"
                        className="rounded-full"
                      />
                    </div>
                    <div>
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
                      <Text sub>{user.balance} ETH</Text>
                    </div>
                  </Flex>
                  <div className="w-full text-righ mb-6">
                    {userLinksMobile.map((link) => (
                      <Link href={link.href}>
                        <Button
                          size="large"
                          type="plain"
                          style="block"
                          onClick={() => setMobileMenu(false)}
                        >
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </>
              )}
              <div className="w-full">
                {navigationLinks.map((link) => (
                  <Link href={link.href}>
                    <Button
                      type="plain"
                      size="large"
                      onClick={() => setMobileMenu(false)}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <Button
              type="primary"
              block
              style="mt-auto w-full"
              onClick={
                user
                  ? () => {
                      router.push("/create");
                      setMobileMenu(false);
                    }
                  : connectWallet
              }
            >
              {user ? "Create" : "Connect Wallet"}
            </Button>
          </Flex>
        </div>
      )}
    </div>
  );
}
