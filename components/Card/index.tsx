import React from "react";
import CardMedia from "./CardMedia";
import CardText from "./CardText";
import CardOption from "./CardOption";
import { BaseComponent } from "../../types/baseComponent";

export default function index({ children, style }: BaseComponent) {
  return (
    <div className={`${style}`}>
      <div
        className={`rounded-md min-w-full w-80 min-h-96 h-96 border border-almond`}
      >
        {children}
      </div>
    </div>
  );
}

export { CardMedia, CardText, CardOption };
