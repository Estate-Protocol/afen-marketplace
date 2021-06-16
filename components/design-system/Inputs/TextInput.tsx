import React, { ReactNode } from "react";
import Text from "@/design-system/Text";
import { slugifyText } from "utils/misc";

interface TextInput {
  label: string;
  description?: string;
  type?: "text" | "number" | "email" | "password" | "search" | "tel";
  value?: string | number;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  prepend?: string;
  onChange?: (text: any) => void;
}

export default function TextInput({
  label,
  value,
  icon,
  type = "text",
  placeholder,
  description,
  required,
  disabled,
  min,
  max,
  prepend,
  onChange,
}: TextInput) {
  return (
    <div className="mb-5 w-full">
      <label htmlFor={slugifyText(label)}>
        <Text>{label}</Text>
      </label>
      <div className="inline-flex items-center w-full mt-2 border-b border-gray-500">
        {icon}
        <input
          name={slugifyText(label)}
          value={value}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          min={min}
          max={max}
          className={`py-1 dark:bg-afen-blue focus:outline-none w-full ${
            disabled ? "text-gray-600" : "dark:text-gray-300"
          }`}
          onChange={(e) => onChange(e.target.value)}
        />
        <Text sub style="ml-2">
          {prepend}
        </Text>
      </div>
      {description && (
        <Text sub size="x-small" style="mt-2">
          {description}
        </Text>
      )}
    </div>
  );
}
