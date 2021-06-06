import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

interface TextProps extends BaseComponent {
  size?: "small" | "x-small" | "default";
  variation?: "create" | "sub" | "";
  sub?: boolean;
}

export default function Text({
  children,
  style,
  sub,
  size = "default",
}: TextProps) {
  const getTextSize = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "x-small":
        return "text-xs";
      default:
        return "default";
    }
  };

  return (
    <p
      className={`tracking-tight ${getTextSize()} ${style} ${
        sub ? "dark:text-gray-500" : ""
      } `}
    >
      {children}
    </p>
  );
}
