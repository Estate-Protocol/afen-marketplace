import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { BaseComponent } from "@/types/BaseComponent";
import Button from "../Button";
import Text from "../Text";

export interface MenuDropDownItem {
  active?: boolean;
  disabled?: boolean;
  label: string | number | boolean;
  value?: string;
  icon?: ReactNode;
  onClick?: (data: string | number | boolean) => void;
}

export interface MenuDropdownButton {
  active?: boolean;
  label: string;
  icon?: ReactNode;
}

interface MenuDropdownProps extends Omit<BaseComponent, "children"> {
  items: MenuDropDownItem[];
  button: MenuDropdownButton;
  size?: "wide" | "tight";
  variant?: "add" | "error" | "info";
}

export default function MenuDropdown({
  button,
  items,
  style,
  size = "tight",
}: MenuDropdownProps) {
  return (
    <div className={`text-right ${style}`}>
      <Menu as="div" className="w-full">
        <div>
          <Menu.Button className="inline-flex items-center py-2 px-3 rounded bg-black bg-opacity-20 hover:bg-opacity-30 focus:outline-none">
            {button.label}
            {button.icon ? (
              button.icon
            ) : (
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
              />
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`right-0 ${
              size === "tight" ? "w-52" : "w-56"
            } absolute z-10 -mt-12 origin-top-right rounded-md shadow-lg bg-gray-600`}
          >
            {items.map((item, index) => (
              <Menu.Item disabled={item.disabled} key={index}>
                {({}) => (
                  <Button
                    type="plain"
                    hover={!item.disabled}
                    disabled={item.disabled}
                    style={`${item.disabled ? "text-gray-500" : ""} 
                    group flex ${
                      items.length === index + 1
                        ? "border-0"
                        : "border-b border-gray-400"
                    } items-center w-full px-2 py-3 text-sm my-1 overflow-hidden`}
                    onClick={() =>
                      item.onClick(item.label ? item.label : item.value)
                    }
                  >
                    {item.icon}
                    <Text>{item.label}</Text>
                  </Button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
