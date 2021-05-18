import Image from "next/image";
import Link from "../Link";
import { ethers } from "ethers";

export default function Header() {
  // Connect to Metamask using Ethers.js 5.0
  const metamask_connect = async () => {
    if(window.ethereum.isConnected()) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
      alert('Please install Metamask')
    }
  }
  return (
    <div className="bg-white dark:bg-afen-blue px-4 md:px-10 lg:px-16 py-4 mx-auto border-b flex items-center">
      <Link href="/">
        <a className="flex items-center font-mono tracking-wide">
          <Image src="/logo.png" width="40" height="40" />
          <p className="ml-2 font-weight-bold text-xl">AFEN</p>
        </a>
      </Link>

      <div className="ml-auto">
        <Link href="/">
          <button className="px-5 hover:text-afen-yellow font-semibold text-sm">
            Browse
          </button>
        </Link>
        <Link href="/verified/government">
          <button className="px-5 hover:text-afen-yellow font-semibold text-sm">
            Government Verified
          </button>
        </Link>
        <Link href="/african-artist">
          <button className="px-5 hover:text-afen-yellow font-semibold text-sm">
            African Artist
          </button>
        </Link>
        <Link href="/create">
          <button className="ml-5 px-6 py-2 bg-almond text-afen-blue rounded-xl hover:text-afen-yellow font-semibold text-sm">
            Create
          </button>
        </Link>
        <button onClick={metamask_connect}>Metamask</button>
      </div>
    </div>
  );
}
