import React, { useState } from "react";
import { Tab, TabsContainer } from "./TabsNavigation.styles";
interface tabProps {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}
interface TabsNavigationProps {
  tabs: tabProps[];
  defaultTab: tabProps;
  onTabChange: (tab: tabProps) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  tabs,
  defaultTab,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab: tabProps) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab.id === tab.id}
          onClick={() => handleTabClick(tab)}
        >
          {tab.title}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default TabsNavigation;
