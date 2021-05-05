import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function CardText({ children, style, onClick }: BaseComponent) {
  return (
    <div
      className={`absolute bottom-0 w-full px-5 py-3  ${style}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
