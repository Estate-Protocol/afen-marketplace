import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

export default function CardText({ children, style, onClick }: BaseComponent) {
  return (
    <div className={`bottom-0 w-full px-5 py-3  ${style}`} onClick={onClick}>
      {children}
    </div>
  );
}
