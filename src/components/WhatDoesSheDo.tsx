import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";
import SectionHeader from "./Misc/SectionHeader";

const liInactive =
  "text-neutral-400 hover:italic transition-all ease-linear hover:text-neutral-50 cursor-pointer";
const liActive = "text-neutral-200 cursor-pointer italic";

const listContent = [
  "Just to be clear, when we say content we don't just mean “content”. We mean truly resonate and passion-filled storytelling that people actually enjoy. In a world of content overload, we believe that the power of a good story is what in the end will stand the test of time.",
  "With years of experience helping Chinese brands reach western audiences on social media at some of the biggest Chuhai brands, we specialize in social strategies with content leading the way. What can we say, we’re extroverted introverts.",
  "For us talent isn’t boiled down to reach or the number of followers you have; it’s truly about finding the right people to help you connect with the audiences you’re after. From some of the biggest celebs, creatives, and KOLs to just your everyday creator that has a great story waiting to be told, we can help you do it all.",
];

export default function WhatDoesSheDo() {
  const [active, setActive] = useState(0);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    // Animate typing effect
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0,
        // onComplete: () => {
        //   const text = listContent[active];
        //   let index = 0;
        //   const typingInterval = setInterval(() => {
        //     textRef.current.textContent += text[index];
        //     index++;
        //     if (index === text.length) {
        //       clearInterval(typingInterval);
        //     }
        //   });
        // },
      }
    );
  }, [active]);

  const handleItemClick = (index: number) => {
    if (!textRef.current) return;
    //textRef.current.textContent = ""; // Clear previous text

    setActive(index);
  };

  return (
    <>
      <section className="min-h-screen max-w-[85vw] m-auto flex flex-col">
        <div className="">
          <SectionHeader title={"What does she do?"} />
        </div>
        <div className="h-full flex flex-col justify-between flex-grow p-4">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="md:w-[49%]">
              <ul className="font-bold uppercase text-2xl">
                <li
                  className={active === 0 ? liActive : liInactive}
                  onClick={() => handleItemClick(0)}
                >
                  Content Creation
                </li>
                <li
                  className={active === 1 ? liActive : liInactive}
                  onClick={() => handleItemClick(1)}
                >
                  Social Media Strategy
                </li>
                <li
                  className={active === 2 ? liActive : liInactive}
                  onClick={() => handleItemClick(2)}
                >
                  Talent Management
                </li>
              </ul>
            </div>
            <div className="md:w-[49%]">
              <p ref={textRef}>{listContent[active]}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <img
                src="https://picsum.photos/1200/1200"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://picsum.photos/1200/1200"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
