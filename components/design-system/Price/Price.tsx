import { BaseComponent } from "@/types/BaseComponent";
import React from "react";

export interface PriceProps extends BaseComponent {
  currency: string;
  amount: string;
  toLocal: boolean;
  localize: boolean;
}

export default function Price() {
  return <div></div>;
}
