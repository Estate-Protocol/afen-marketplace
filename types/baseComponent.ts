import { ReactNode } from "react";

export interface BaseComponent {
  children: ReactNode;
  style?: string;
  onClick?()
}
