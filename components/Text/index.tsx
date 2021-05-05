import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function Text({ children, style }: BaseComponent) {
  return <p className={style}>{children}</p>;
}
