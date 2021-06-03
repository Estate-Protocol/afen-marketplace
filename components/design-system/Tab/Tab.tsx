import { BaseComponent } from "@/types/BaseComponent";
import { Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Text from "@/design-system/Text";

export interface TabComponentProps extends BaseComponent {}

export default function TabComponent({ children }: TabComponentProps) {
  return (
    <Tab>
      <Text>{children}</Text>
    </Tab>
  );
}
