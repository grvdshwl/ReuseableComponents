import { useState } from "react";
import TabsNavigation from "../../Components/TabNavigation";
import { CommonTitle, CommonWrapper } from "../AppUI/App.styles";
import { tabData } from "../../helpers/mockData";
import {
  TabNavigationUIContentContainer,
  TabNavigationUIContentDescription,
  TabNavigationUIContentUser,
} from "./TabsNavigationUI.styles";

interface tabsProps {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
}
const TabsNavigationUI = () => {
  const [selectedTab, setSelectedTab] = useState(tabData[0]);

  const handleTabChange = (tab: tabsProps) => {
    setSelectedTab(tab);
  };

  return (
    <CommonWrapper>
      <CommonTitle>Tabs Navigation</CommonTitle>
      <TabsNavigation
        tabs={tabData}
        defaultTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <TabNavigationUIContentContainer>
        <TabNavigationUIContentUser>
          {selectedTab.author}
        </TabNavigationUIContentUser>
        <TabNavigationUIContentDescription>
          {selectedTab.content}
        </TabNavigationUIContentDescription>
      </TabNavigationUIContentContainer>
    </CommonWrapper>
  );
};

export default TabsNavigationUI;
