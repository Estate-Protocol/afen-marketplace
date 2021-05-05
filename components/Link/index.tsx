import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AppLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} text-afen-yellow`;
  }

  className = `${className} focus:outline-none`;

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
