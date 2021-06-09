import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

export default function Container({ children, style }: BaseComponent) {
  return (
    <div
      className={`px-4 md:px-10 lg:px-16 mx-auto overflow-x-hidden w-full ${style}`}
    >
      {children}
    </div>
  );
}
