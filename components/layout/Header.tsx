import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="dark:bg-afen-blue px-10 py-4 border-b flex items-center font-mono tracking-wide">
      <Link href="/">
        <a className="flex items-center">
          <Image src="/logo.png" width="40" height="40" />
          <p className="ml-2 font-weight-bold text-xl">AFEN</p>
        </a>
      </Link>
    </div>
  );
}
