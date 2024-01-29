import SectionHeader from "@/components/Misc/SectionHeader";
import {useEffect, useRef} from "react";
import gsap from "gsap";


interface CardProps {
    headerTitle?: string;
}

export default function Card({ headerTitle }: CardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const currentDiv = divRef.current;
        const currentImg = imgRef.current;
        const currentText = textRef.current;

        if (currentImg && currentText) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: currentDiv,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                },
            });

            tl.to(currentImg, {
                autoAlpha: 1,
                duration: 1,
                ease: "power3.out",
            }).to(currentText, {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: "power3.out",
            }, "-=1");
        }
    }, []);


    const imageUrl = "https://picsum.photos/1200/1200";
    return (
        <div ref={divRef}>
            <SectionHeader title={headerTitle} />
            <div className={"flex justify-between items-stretch h-full gap-4 pt-12 pb-20"}>
                <div className={"w-[49%]"}>
                    <div className="flex h-full justify-start items-center">
                        <div className="relative circle-mask shadow-2xl shadow-neutral-700">
                            <img ref={imgRef} data-speed="0.8" src={imageUrl} className="absolute object-cover w-full h-full opacity-0"/>
                        </div>
                    </div>

                </div>
                <div className={"w-[49%] h-full text-5xl leading-normal"}>
                    <p ref={textRef} className={"opacity-0 -translate-y-8"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam
                        architecto asperiores aspernatur atque autem blanditiis commodi consequatur consequuntur
                        corporis cumque cupiditate delectus dolor doloremque doloribus dolorum ea earum eius
                        eligendi error et eum eveniet excepturi exercitationem expedita explicabo fugiat fugit
                        harum hic id illum impedit in incidunt ipsa ipsum iste itaque iure iusto laboriosam
                    </p>
                </div>
            </div>
        </div>
    )
}