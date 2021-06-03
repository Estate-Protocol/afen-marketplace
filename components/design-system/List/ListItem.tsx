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
      className={`list-none py-2 mb-2 rounded-md ${
        (hover || onClick) && "px-2 hover:bg-afen-blue-light cursor-pointer"
      } `}
      onClick={onClick}
    >
      {children}
    </li>
  );
}
