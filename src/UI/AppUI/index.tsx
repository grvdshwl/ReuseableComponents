import React, { useState } from "react";
import {
  AppUIComponentWrapper,
  AppWrapper,
  AppWrapperNavigation,
  AppWrapperNavigationBar,
} from "./App.styles";
import AccordianUI from "../AccordianUI";
import AnalogClockUI from "../AnalogClockUI";
import CommentsBoxUI from "../CommentsBoxUI";
import ProgressBarUI from "../ProgressBarUI";
import RatingsUI from "../RatingsUI";
import StopwatchUI from "../StopwatchUI";
import AutocompleteUI from "../AutocompleteUI";
import TodoListUI from "../ToDoListUI";
interface ComponentInterface {
  id: number;
  name: string;
  component: () => JSX.Element;
}
const data = [
  { id: 1, name: "Accordian", component: AccordianUI },
  { id: 2, name: "Analog Clock", component: AnalogClockUI },
  { id: 3, name: "Comments Box", component: CommentsBoxUI },
  { id: 4, name: "Progress Bar", component: ProgressBarUI },
  { id: 5, name: "Ratings", component: RatingsUI },
  { id: 6, name: "Stop Watch", component: StopwatchUI },
  { id: 7, name: "Autocomplete Input", component: AutocompleteUI },
  { id: 8, name: "Todo List", component: TodoListUI },
];
const AppUI = () => {
  const [selectedComponent, setSelectedComponent] = useState({
    id: 2,
    name: "Analog Clock",
    component: AnalogClockUI,
  });
  const handleClick = (data: ComponentInterface) => {
    setSelectedComponent(data);
  };
  return (
    <AppWrapper>
      <AppWrapperNavigation>
        {data.map((component) => (
          <AppWrapperNavigationBar
            key={component.id}
            isSelected={selectedComponent.id === component.id}
            onClick={handleClick.bind(null, component)}
          >
            {component.name}
          </AppWrapperNavigationBar>
        ))}
      </AppWrapperNavigation>
      <AppUIComponentWrapper>
        {React.createElement(selectedComponent.component)}
      </AppUIComponentWrapper>
    </AppWrapper>
  );
};

export default AppUI;
