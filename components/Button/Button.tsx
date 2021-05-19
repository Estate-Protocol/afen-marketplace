import React from "react";
import { BaseComponent } from "../../types/baseComponent";

enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINED = "outlined",
}

interface ButtonProps extends BaseComponent {
  id?: string;
  url?: string;
  type?: "primary" | "secondary" | "outlined";
  size?: "slim" | "medium" | "large";
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
  plain,
  style,
  type,
  onClick,
  onFocus,
}: ButtonProps) {
  const getButtonStyle = (): string => {
    const defaultStyle = "font-semibold text-sm px-3 focus:outline-none";

    let buttonStyle = plain
      ? "hover:text-afen-yellow dark:hover:text-almond "
      : "rounded-md py-2 ";

    switch (type) {
      case ButtonType.PRIMARY:
        buttonStyle += "bg-almond dark:text-black px-5 ";
        break;
      case ButtonType.SECONDARY:
        buttonStyle += "";
        break;
      case ButtonType.OUTLINED:
        buttonStyle += "border-2 border-almond bg-none ";
        break;
      default:
        buttonStyle += "";
    }

    return `${defaultStyle} ${buttonStyle} ` + style;
  };

  return (
    <button className={getButtonStyle()} onClick={onClick} onFocus={onFocus}>
      {children}
    </button>
  );
}
