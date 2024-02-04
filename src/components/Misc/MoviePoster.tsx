import {useEffect, useRef} from "react";
import gsap from "gsap";

interface MoviePosterProps {
    img: string;
    title: string;
}

export default function MoviePoster({ img, title }: MoviePosterProps) {
    const moviePoster = useRef<HTMLDivElement>(null);
    const posterImage = useRef<HTMLImageElement>(null);
    const titleText = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentPoster = moviePoster.current;
        const currentImage = posterImage.current;
        const currentTitle = titleText.current;



        if (currentPoster) {
            const fadeIn = gsap.to(currentTitle, {
                autoAlpha: 1,
                duration: 1,
                paused: true,
                ease: "sine.in",
            });

            currentPoster.addEventListener("mouseenter", () => {
                fadeIn.play();
            });
            currentPoster.addEventListener("mouseleave", () => {
                fadeIn.reverse();
            });
        }
    }, []);

    return (
        <div ref={moviePoster} className={"lg:w-1/3 flex-none"}>
            <div className={"relative"}>
                <img
                     ref={posterImage}
                     src={img}
                     alt={"Origins"}
                     className={"aspect-[9/16] grayscale hover:grayscale-0 transition-all duration-1000 rounded-2xl w-full h-[75vh] object-cover"}/>
                <div ref={titleText} className="opacity-0 absolute top-0 left-0 right-0 bottom-0 flex items-start justify-center px-4 py-8 pointer-events-none">
                    <span className="text-white text-7xl uppercase font-bold">{title}</span>
                </div>
            </div>


        </div>
    )
}