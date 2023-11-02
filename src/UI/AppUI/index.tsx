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
import PollWidgetUI from "../PollWidgetUI";
import Multi from "../Multi";
import CarouselUI from "../CarouselUI";
import CalculatorUI from "../CalculatorUI";
import DigitalClockUI from "../DigitalClockUI";
import DebounceUI from "../DebounceUI";
import ThrottleUI from "../ThrottleUI";
import InfinitScrollUI from "../InfiniteScrollUI";
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
  { id: 9, name: "Poll Widget", component: PollWidgetUI },
  { id: 10, name: "Multi", component: Multi },
  { id: 12, name: "Carousel", component: CarouselUI },
  { id: 13, name: "Calculator", component: CalculatorUI },
  { id: 14, name: "Digital Clock", component: DigitalClockUI },
  { id: 15, name: "Debounce", component: DebounceUI },
  { id: 16, name: "Throttle", component: ThrottleUI },
  {
    id: 17,
    name: "Infinite Scroll",
    component: InfinitScrollUI,
  },
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
      <AppWrapperNavigation className="hide-scroll-bar">
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
      <AppUIComponentWrapper className="hide-scroll-bar">
        {React.createElement(selectedComponent.component)}
      </AppUIComponentWrapper>
    </AppWrapper>
  );
};

export default AppUI;
