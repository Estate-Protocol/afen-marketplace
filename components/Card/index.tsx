import React from "react";
import CardMedia from "./CardMedia";
import CardText from "./CardText";
import CardOption from "./CardOption";
import { BaseComponent } from "../../types/baseComponent";

export default function index({ children, style }: BaseComponent) {
  return (
    <div className="w-80">
      <div className="group w-80 min-w-full">
        <div
          className={`rounded-md min-h-96 h-96 border-2 group-hover:border-4 cursor-pointer border-afen-yellow dark:bg-blue-50 dark:text-black ${style}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { CardMedia, CardText, CardOption };
