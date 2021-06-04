import React, { ReactNode } from "react";

interface FlexProps {
  spaceBetween?: boolean;
  start?: boolean;
  wrap?: boolean;
  children: ReactNode | Element[];
  style?: string;
  col?: boolean;
  center?: boolean;
}

export default function Flex({
  children,
  style,
  spaceBetween,
  start,
  col,
  center,
  wrap,
}: FlexProps) {
  return (
    <div
      className={`flex overflow-auto w-full ${
        start ? "items-start" : "items-end"
      }
      ${wrap && "flex-wrap md:flex-nowrap"}
      ${spaceBetween && "justify-between"}
      ${col && "flex-col"} 
      ${center && "items-center"} 
      ${style}`}
    >
      {children}
    </div>
  );
}
