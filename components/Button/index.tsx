import React from "react";
import { BaseComponent } from "../../types/baseComponent";

export default function Button({ children }: BaseComponent) {
  return <button className="px-5 py-2 rounded-full bg-almond text-yellow-800 font-semibold text-sm">{children}</button>;
}
