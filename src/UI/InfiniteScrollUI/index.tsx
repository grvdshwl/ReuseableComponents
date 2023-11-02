import InfiniteScroll from "../../Components/InfiniteScroll";
import { CommonTitle, CommonWrapper } from "../AppUI/App.styles";

const InfinitScrollUI = () => {
  return (
    <CommonWrapper>
      <CommonTitle>Infinite Scrolling</CommonTitle>
      <InfiniteScroll />
    </CommonWrapper>
  );
};

export default InfinitScrollUI;
