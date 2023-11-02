import { useEffect, useState } from "react";
import {
  InfiniteScrollBox,
  InfiniteScrollContainer,
} from "./InfiniteScroll.styles";
import { infiniteScrollAnimationObserver } from "../../helpers/helper";

const InfiniteScroll = () => {
  const [cardList, setCardList] = useState(10);
  const lastCardObserver = new IntersectionObserver(
    (entries) => {
      const lastChild = entries[0];

      if (!lastChild) {
        return;
      }
      setCardList((prev) => prev + 1);
      lastCardObserver.unobserve(lastChild.target);
      const lastCard = document.querySelector(
        ".infinite-scroll-box:last-child"
      );
      lastCardObserver.observe(lastCard!);
    },
    { root: null, rootMargin: "0px" }
  );
  useEffect(() => {
    const cards = document.querySelectorAll(".infinite-scroll-box");
    cards.forEach((card) => {
      infiniteScrollAnimationObserver.observe(card);
    });
    const lastCard = document.querySelector(".infinite-scroll-box:last-child");
    lastCardObserver.observe(lastCard!);

    return () => {
      infiniteScrollAnimationObserver.disconnect();
      lastCardObserver.disconnect();
    };
  });

  return (
    <InfiniteScrollContainer>
      {new Array(cardList).fill("").map((_, index) => (
        <InfiniteScrollBox
          key={index}
          index={index}
          className="infinite-scroll-box"
        />
      ))}
    </InfiniteScrollContainer>
  );
};

export default InfiniteScroll;
