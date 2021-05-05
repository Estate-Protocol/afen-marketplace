import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function Title({ children, style }: BaseComponent) {
  return (
    <h1 className={`tracking-tight text-xl md:text-3xl ${style}`}>
      {children}
    </h1>
  );
}
