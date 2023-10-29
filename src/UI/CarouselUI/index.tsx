import styled from "styled-components";
import Carousel from "../../Components/Carousel";
import { mockImages } from "../../helpers/mockData";

export const CarouselUITitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

export const CarouselUIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CarouselUI = () => {
  return (
    <CarouselUIWrapper>
      <CarouselUITitle>Carousel</CarouselUITitle>
      <Carousel images={mockImages} />
    </CarouselUIWrapper>
  );
};

export default CarouselUI;
