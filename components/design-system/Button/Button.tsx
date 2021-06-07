import React from "react";
import { BaseComponent } from "@/types/BaseComponent";

enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outlined",
  PLAIN = "plain",
}

interface ButtonProps extends BaseComponent {
  id?: string;
  url?: string;
  type?: "primary" | "secondary" | "outlined" | "plain";
  size?: "slim" | "medium" | "large";
  icon?: boolean;
  plain?: boolean;
  block?: boolean;
  external?: boolean;
  submit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  pressed?: boolean;
  accessibilityLabel?: string;
  role?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaDescribedBy?: string;
  onClick?(): void;
  onFocus?(): void;
  onBlur?(): void;
  onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
}

export default function Button({
  children,
  style,
  type = "primary",
  icon,
  block,
  onClick,
  onFocus,
}: ButtonProps) {
  const getButtonStyle = (): string => {
    const defaultStyle = "font-semibold text-sm px-3 focus:outline-none";

    let buttonStyle = "rounded py-2 text-md ";

    switch (type) {
      case ButtonType.PRIMARY:
        buttonStyle +=
          "px-6 py-2 rounded-2xl bg-afen-yellow border-2 border-afen-blue-light dark:text-black font-semibold ml-2 focus:outline-none ";
        break;
      case ButtonType.SECONDARY:
        buttonStyle +=
          "px-6 py-2 rounded-2xl bg-afen-yellow bg-opacity-30 dark:text-almond font-semibold ";
        break;
      case ButtonType.OUTLINED:
        buttonStyle += "border-2 border-almond bg-none ";
        break;
      case ButtonType.PLAIN:
        buttonStyle += "hover:text-afen-yellow dark:hover:text-almond px-0 ";
        break;
      default:
        buttonStyle += "";
    }

    return `${defaultStyle} ${buttonStyle} ${
      icon ? "inline-flex items-center justify-between" : ""
    } ${block ? "w-full py-3" : ""}  ${style}`;
  };

  return (
    <button className={getButtonStyle()} onClick={onClick} onFocus={onFocus}>
      {children}
    </button>
  );
}
