import React, { useState } from "react";
import {
  CarouselContainer,
  CarouselDots,
  CarouselDotsContainer,
  CarouselImage,
  CarouselLeftButton,
  CarouselMainContainer,
  CarouselRelativeContainer,
  CarouselRightButton,
} from "./Carousel.styles";

interface CarouselProps {
  images: { url: string; id: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotsClick = (index: number) => {
    setActiveIndex(index);
  };
  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <CarouselContainer>
      <CarouselRelativeContainer>
        <CarouselMainContainer activeIndex={activeIndex}>
          {images.map((image) => (
            <CarouselImage key={image.id} src={image.url} />
          ))}
        </CarouselMainContainer>
        <CarouselLeftButton
          onClick={handleLeftClick}
          isVisible={activeIndex !== 0}
        />
        <CarouselRightButton
          onClick={handleRightClick}
          isVisible={activeIndex !== images.length - 1}
        />
      </CarouselRelativeContainer>
      <CarouselDotsContainer>
        {images.map((image, index) => {
          return (
            <CarouselDots
              key={image.id}
              onClick={handleDotsClick.bind(null, index)}
              isActive={index === activeIndex}
            />
          );
        })}
      </CarouselDotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
