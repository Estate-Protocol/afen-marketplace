import { ReactNode, useState } from "react";
import { Tab, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export interface TabsComponentProps {
  tabs: {
    title: string;
    body: ReactNode | null;
  }[];
}

export default function TabsComponent({ tabs }: TabsComponentProps) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className="mt-3"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      {tabs.map(({ title }, index) => (
        <Tab
          key={index}
          className={`text-gray-400 list-none inline-block pr-5 mr-8 cursor-pointer dark:focus:text-white pb-1 transition-colors duration-75 ease-linear text-sm ${
            tabIndex === index && "dark:text-afen-yellow border-b border-black dark:border-afen-yellow"
          }`}
        >
          {title}
        </Tab>
      ))}
      {tabs.map(({ body }, index) => (
        <TabPanel key={index} className={"mt-2 mb-2"}>
          {body}
        </TabPanel>
      ))}
    </Tabs>
  );
}
