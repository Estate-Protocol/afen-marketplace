import Image from "next/image";
import Link from "../Link";
import Button from "../Button";

export default function Header() {
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
        <Link href="/create">
          <button className="px-5 hover:text-afen-yellow font-semibold text-sm">
            Link Wallet
          </button>
        </Link>
        <Link href="/create">
          <button className="px-5 hover:text-afen-yellow font-semibold text-sm">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
}
