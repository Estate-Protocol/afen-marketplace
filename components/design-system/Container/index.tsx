import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

interface ContainerProps extends BaseComponent {
  page?: boolean;
  mdAndUp?: boolean;
}

export default function Container({
  children,
  style,
  page,
  mdAndUp = false,
}: ContainerProps) {
  return (
    <div
      className={`${
        mdAndUp ? "px-0" : "px-4"
      } md:px-10 lg:px-16 mx-auto overflow-x-hidden w-full ${style} ${
        page ? "mt-24 md:mt-32" : ""
      }`}
    >
      {children}
    </div>
  );
}
