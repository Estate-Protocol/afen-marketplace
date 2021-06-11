import { Dispatch, SetStateAction, ReactNode } from "react";
import { Switch } from "@headlessui/react";

interface ToggleSwitchProps {
  enabled: boolean;
  label?: string | ReactNode;
  srOnlyLabel?: string;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export default function ToggleSwitch({
  enabled,
  label,
  srOnlyLabel,
  onChange,
}: ToggleSwitchProps) {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span className="sr-only">{srOnlyLabel}</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
