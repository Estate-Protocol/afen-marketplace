import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function Card({ children, style }: BaseComponent) {
  return (
    <div className={`absolute bottom-0 w-full px-5 py-3  ${style}`}>
      {children}
    </div>
  );
}
