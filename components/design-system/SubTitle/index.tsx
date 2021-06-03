import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

interface SubTitleProps extends BaseComponent {
  plain?: boolean;
  children?: string | null;
}

export default function SubTitle({ children, style, plain }: SubTitleProps) {
  return (
    <p
      className={`font-light ${
        !plain && "text-gray-400"
      } text-lg md:text-xl ${style}`}
    >
      {children}
    </p>
  );
}
