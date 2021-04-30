import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function index({ children, style }: BaseComponent) {
  return (
    <div className={`px-4 md:px-10 lg:px-16 mx-auto ${style}`}>{children}</div>
  );
}
