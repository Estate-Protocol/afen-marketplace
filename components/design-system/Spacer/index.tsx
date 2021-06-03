import React from "react";

interface SpacerProps {
  vertical?: boolean;
}

export default function index({ vertical }: SpacerProps) {
  return <p className={vertical ? "px-30" : "py-30 h-30"}>Hi</p>;
}
