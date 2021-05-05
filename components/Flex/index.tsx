import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function Flex({ children, style }: BaseComponent) {
  return (
    <div className={`flex overflow-auto w-full ${style}`}>{children}</div>
  );
}
