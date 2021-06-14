import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

interface TextProps extends BaseComponent {
  size?: "large" | "medium" | "small" | "x-small" | "default";
  variation?: "create" | "sub" | "";
  sub?: boolean;
  bold?: boolean;
  truncate?: boolean;
  textWidth?: string;
}

// TODO: onCopy
export default function Text({
  children,
  style,
  sub,
  bold,
  size = "default",
  truncate,
  textWidth,
}: TextProps) {
  const getTextSize = () => {
    switch (size) {
      case "medium":
        return "text-lg";
      case "medium":
        return "text-md";
      case "small":
        return "text-sm";
      case "x-small":
        return "text-xs";
      default:
        return "text-base";
    }
  };

  return (
    <p
      className={`tracking-tight ${getTextSize()} ${style} ${
        sub ? "text-gray-500" : ""
      } ${truncate && textWidth ? `truncate ${textWidth}` : ""}
      ${bold ? "font-semibold" : ""}
      `}
      style={truncate && { lineClamp: 3, boxOrient: "vertical" }}
    >
      {children}
    </p>
  );
}
