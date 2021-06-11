import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

export default function Title({ children, style }: BaseComponent) {
  return (
    <h1 className={`tracking-tight text-2xl md:text-4xl font-normal ${style}`}>
      {children}
    </h1>
  );
}
