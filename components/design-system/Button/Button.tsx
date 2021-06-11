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
  size?: "small" | "medium" | "large";
  variant?: "add" | "delete";
  hover?: boolean;
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
  size,
  type = "primary",
  hover = true,
  icon,
  block,
  disabled,
  onClick,
  onFocus,
}: ButtonProps) {
  const getButtonStyle = (): string => {
    const defaultStyle = "font-medium focus:outline-none";

    let buttonStyle = "py-2 text-md ";
    let buttonSize = "";

    switch (type) {
      case ButtonType.PRIMARY:
        buttonStyle +=
          "px-4 py-2 rounded-md bg-afen-yellow text-black focus:outline-none";
        break;
      case ButtonType.SECONDARY:
        buttonStyle +=
          "px-4 py-2 rounded-md bg-afen-yellow bg-opacity-40 dark:text-afen-yellow";
        break;
      case ButtonType.OUTLINED:
        buttonStyle += "rounded border-2 border-almond bg-none";
        break;
      case ButtonType.PLAIN:
        buttonStyle += `px-0 ${
          hover ? "hover:text-gray-300 dark:hover:text-gray-300" : ""
        } `;
        break;
      default:
        buttonStyle += "";
    }

    switch (size) {
      case "large":
        buttonSize += "text-lg";
        break;
      case "medium":
        buttonSize += "text-md";
        break;
      case "small":
        buttonSize += "text-sm";
        break;
      default:
        buttonSize += "text-sm";
    }

    return `${defaultStyle} ${buttonStyle} ${
      icon ? "inline-flex items-center justify-between" : ""
    } ${block ? "w-full py-4" : ""} ${disabled ? "hover:text-gray-500" : ""}
    ${buttonSize}
    ${style ? style : null}`;
  };

  return (
    <button className={getButtonStyle()} onClick={onClick} onFocus={onFocus}>
      {children}
    </button>
  );
}
