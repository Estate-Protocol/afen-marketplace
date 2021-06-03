import React, { ReactNode } from "react";
import ListItem from "./ListItem";

export interface ListProps {
  items: ReactNode[];
  hover?: boolean;
}

export default function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem hover>{item}</ListItem>
      ))}
    </ul>
  );
}
