import { TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tab from "./Tab";

export interface TabListComponentProps {
  tabItems: string[];
}

export default function TabListComponent({ tabItems }: TabListComponentProps) {
  return (
    <TabList>
      {tabItems.map((tabItem) => {
        <Tab>{tabItem}</Tab>;
      })}
    </TabList>
  );
}
