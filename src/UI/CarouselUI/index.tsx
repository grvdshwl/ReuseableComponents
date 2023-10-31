import Carousel from "../../Components/Carousel";
import { mockImages } from "../../helpers/mockData";
import { CommonTitle, CommonWrapper } from "../AppUI/App.styles";

const CarouselUI = () => {
  return (
    <CommonWrapper>
      <CommonTitle>Carousel</CommonTitle>
      <Carousel images={mockImages} />
    </CommonWrapper>
  );
};

export default CarouselUI;
