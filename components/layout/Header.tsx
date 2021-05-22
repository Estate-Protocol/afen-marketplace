import Image from "next/image";
import Link from "../Link";
import Button from "../Button";
import React, { useState } from "react";
import UserDropdownMenu from "../UserDropdownMenu";
import { ethers } from "ethers";
import { navigationLinks } from "../../constants/links";

export default function Header() {
  const [accounts, setAccounts] = useState<string[] | null>(null);
  const [balance, setBalance] = useState("0.00");

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

  return (
    <div className="bg-white dark:bg-afen-blue px-4 md:px-10 lg:px-16 py-4 mx-auto border-b flex items-center">
      <Link href="/">
        <a className="flex items-center font-mono tracking-wide">
          <Image src="/logo.png" width="40" height="40" />
          <p className="ml-2 font-weight-bold text-xl">AFEN</p>
        </a>
      </Link>

      <div className="ml-auto">
        {navigationLinks.map((link) => (
          <Link href={link.href}>
            <Button plain>{link.label}</Button>
          </Link>
        ))}
        {accounts?.length ? (
          <UserDropdownMenu data={{ account: accounts[0], balance }} />
        ) : (
          <Button
            onClick={connectWallet} // TODO: Handle no connection
            type={"outlined"}
          >
            Connect Wallet
          </Button>
        )}
        <Link href="/create">
          <Button type="primary" style="mx-3">
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
}
