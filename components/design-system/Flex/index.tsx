import React, { ReactNode } from "react";

interface FlexProps {
  spaceBetween?: boolean;
  start?: boolean;
  wrap?: boolean;
  children: ReactNode | Element[];
  style?: string;
}

export default function Flex({
  children,
  style,
  spaceBetween,
  start,
  wrap,
}: FlexProps) {
  return (
    <div
      className={`flex overflow-auto w-full ${
        start ? "items-start" : "items-end"
      }
      ${wrap && "flex-wrap md:flex-nowrap"}
      ${spaceBetween && "justify-between"} ${style}`}
    >
      {children}
    </div>
  );
}
