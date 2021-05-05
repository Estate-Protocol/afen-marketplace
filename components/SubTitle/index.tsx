import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function SubTitle({ children, style }: BaseComponent) {
  return <p className={`font-light ${style}`}>{children}</p>;
}
