import React, { ReactNode } from "react";
import Text from "@/design-system/Text";
import { slugifyText } from "utils/misc";

interface TextInput {
  label: string;
  description?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  required?: boolean;
  onChange: (text: string) => void;
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
  onChange,
}: TextInput) {
  return (
    <div className="mb-8 border-b border-gray-500 w-full">
      <label htmlFor={slugifyText(label)} className="">
        <Text>{label}</Text>
        {description && (
          <Text sub size="small" style="mb-1">
            {description}
          </Text>
        )}
      </label>
      <div className="inline-flex items-center w-full mt-2">
        {icon}
        <input
          name={slugifyText(label)}
          value={value}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          className="py-2 bg-afen-blue focus:outline-none rounded w-full"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
