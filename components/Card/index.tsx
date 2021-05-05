import React from "react";
import CardMedia from "./CardMedia";
import CardText from "./CardText";
import CardOption from "./CardOption";
import { BaseComponent } from "../../types/baseComponent";

interface CardProps extends BaseComponent {
  light?: boolean;
}

export default function Card({ children, style, onClick }: CardProps) {
  return (
    <div className="w-80" onClick={onClick}>
      <div className="group w-80 min-w-full">
        <div
          className={`rounded-xl min-h-96 h-96 border-4 cursor-pointer border-gray-900 shadow-md dark:text-black overflow-hidden ${style}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { CardMedia, CardText, CardOption };
