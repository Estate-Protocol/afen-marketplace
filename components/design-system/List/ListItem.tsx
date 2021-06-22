import { BaseComponent } from "@/types/BaseComponent";
import React from "react";

export interface ListItemProps extends BaseComponent {
  numbered?: boolean;
  hover?: boolean;
  onClick?: () => void;
}

export default function ListItem({ children, hover, onClick }: ListItemProps) {
  return (
    <li
      className={`list-none pb-3 mb-3 border-b dark:border-gray-700 ${
        hover || onClick ? "px-2 hover:bg-afen-blue-light cursor-pointer" : ""
      } `}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
