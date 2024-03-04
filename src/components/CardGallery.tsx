// CardGallery.tsx
import React, { useEffect, useRef, useState } from "react";

const CardGallery: React.FC = () => {
  const cardScrollContainerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<HTMLLIElement[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Dynamically calculate card width
  const cardWidth = 700; // This should match your CSS var(--card-width) if dynamic calculation is needed

  useEffect(() => {
    const cardElements = Array.from(
      document.querySelectorAll(
        ".card-gallery-item"
      ) as NodeListOf<HTMLLIElement>
    );
    setCards(cardElements);
    centerFirstCard();
    transformCards();
  }, []);

  useEffect(() => {
    transformCards();
  }, [currentCardIndex]); // Reapply transformations when currentCardIndex changes

  const centerFirstCard = () => {
    const scrollContainer = cardScrollContainerRef.current;
    if (!scrollContainer || cards.length === 0) return;

    const firstCard = cards[0];
    const gap = parseInt(window.getComputedStyle(firstCard).marginRight, 10);
    const initialScrollPosition =
      firstCard.offsetLeft -
      scrollContainer.offsetWidth / 2 +
      cardWidth / 2 +
      gap;

    scrollContainer.scrollTo({
      left: initialScrollPosition,
      behavior: "smooth",
    });
  };

  const transformCards = () => {
    cards.forEach((card, index) => {
      const cardImg = card.querySelector(".card-item") as HTMLDivElement;
      if (!cardImg) return;

      if (index === currentCardIndex) {
        cardImg.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
        cardImg.style.opacity = "1";
      } else {
        cardImg.style.transform = "matrix(0.7, 0, 0, 0.7, 0, 0)";
        cardImg.style.opacity = "0.5";
      }
    });
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);

    // Scroll to next card
    const scrollContainer = cardScrollContainerRef.current;
    if (!scrollContainer) return;

    const nextCard = cards[(currentCardIndex + 1) % cards.length];
    const gap = parseInt(window.getComputedStyle(nextCard).marginRight, 10);
    const nextScrollPosition =
      nextCard.offsetLeft -
      scrollContainer.offsetWidth / 2 +
      cardWidth / 2 +
      gap;

    scrollContainer.scrollTo({
      left: nextScrollPosition,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );

    // Scroll to previous card

    const scrollContainer = cardScrollContainerRef.current;
    if (!scrollContainer) return;

    const prevCard =
      cards[(currentCardIndex - 1 + cards.length) % cards.length];
    const gap = parseInt(window.getComputedStyle(prevCard).marginRight, 10);
    const prevScrollPosition =
      prevCard.offsetLeft -
      scrollContainer.offsetWidth / 2 +
      cardWidth / 2 +
      gap;

    scrollContainer.scrollTo({
      left: prevScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="cardScrollContainer"
        className="card-scroll-container"
        ref={cardScrollContainerRef}
      >
        <ul id="cardParent" className="card-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <li
              key={index}
              className={`card-gallery-item ${
                index === currentCardIndex ? "current" : ""
              }`}
            >
              <div className="card-item">
                <img
                  src={`https://unsplash.it/500/700?random=${index}`}
                  alt="image"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[85vw] m-auto flex justify-between mb-28">
        <button
          id="prevBtn"
          className="prev"
          onClick={handlePrev}
          disabled={currentCardIndex === 0}
        >
          Prev
        </button>
        <button
          id="nextBtn"
          className="next"
          onClick={handleNext}
          disabled={currentCardIndex === cards.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CardGallery;
