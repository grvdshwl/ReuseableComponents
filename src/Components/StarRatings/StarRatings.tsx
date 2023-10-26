import { useState } from "react";
import {
  StarIcon,
  StarRatingsContainer,
  StarRatingsMainContainer,
  StarRatingsTitle,
} from "./StarRatings.styles";

interface StarRatingsProps {
  totalRatings?: number;
  starColor?: string;
  starSize?: string;
  edit: boolean;
  value: number;
  onChange?: (rating: number) => void;
}

const StarRatings: React.FC<StarRatingsProps> = (props) => {
  const {
    totalRatings = 5,
    starSize = "20px",
    starColor = "#FDCC0D",
    edit = true,
    value,
    onChange,
  } = props;

  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (rating: number) => {
    if (edit && onChange) {
      onChange(rating);
    }
  };
  const handleStarHover = (rating: number) => {
    if (edit) {
      setHoverRating(rating);
    }
  };

  const resetStarHover = () => {
    if (edit) {
      setHoverRating(0);
    }
  };
  const starsArray = new Array(totalRatings).fill("");
  return (
    <StarRatingsContainer>
      <StarRatingsTitle>Star Ratings</StarRatingsTitle>
      <StarRatingsMainContainer>
        {starsArray.map((_, index: number) => {
          const rating = index + 1;

          const color = value >= rating ? starColor : "#D1D1D1";
          const hoverColor = hoverRating >= rating ? starColor : "#D1D1D1";
          const finalColor = hoverRating > 0 ? hoverColor : color;

          return (
            <StarIcon
              key={index}
              size={starSize}
              color={finalColor}
              onClick={handleStarClick.bind(null, rating)}
              onMouseEnter={handleStarHover.bind(null, rating)}
              onMouseLeave={resetStarHover}
              isEditable={edit}
            />
          );
        })}
      </StarRatingsMainContainer>
    </StarRatingsContainer>
  );
};

export default StarRatings;
