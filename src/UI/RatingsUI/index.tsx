import { useState } from "react";
import StarRatings from "../../Components/StarRatings/StarRatings";

const RatingsUI = () => {
  const [rating, setRating] = useState(0);

  const handleChange = (rating: number) => {
    setRating(rating);
  };

  return (
    <>
      <StarRatings
        starSize="42px"
        value={rating}
        onChange={handleChange}
        edit={true}
      />
    </>
  );
};

export default RatingsUI;
