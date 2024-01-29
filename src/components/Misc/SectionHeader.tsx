import {useEffect, useRef} from "react";
import gsap from "gsap";

interface SectionHeaderProps {
    title?: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const hrRef = useRef<HTMLHRElement>(null);

    useEffect(() => {

        const currentContainer = sectionRef.current;
        const currentH2 = h2Ref.current;
        const currentHr = hrRef.current;

        if (currentContainer && currentHr) {
            gsap.to(currentHr, {
                scrollTrigger: {
                    trigger: currentContainer,
                    markers: true,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                },
                width: "100%",
                duration: 6,
            });

            if (currentH2) {
                gsap.to(currentH2, {
                    scrollTrigger: {
                        trigger: currentContainer,
                        markers: true,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: true,
                    },
                    autoAlpha: 1,
                    duration: 6
                });
            }
        }


    }, []);

    return (
        <div ref={sectionRef} className={"section-header"}>
            {title && <h2 ref={h2Ref} className={"section-title text-2xl uppercase font-light text-white mb-4 opacity-0"}>{title}</h2>}
            <hr ref={hrRef} className={"section-hr border-neutral-600 my-4 w-[0px]"}/>
        </div>
    )
};