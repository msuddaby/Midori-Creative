import {useEffect, useLayoutEffect} from "react";
import gsap from "gsap";
import SplitText from "gsap-trial/dist/SplitText";
import {ScrollTrigger} from "gsap-trial/dist/ScrollTrigger";
import SectionHeader from "@/components/Misc/SectionHeader";

function burnIn() {
    //let e = new SplitText(".burn-in", { type: "chars" });
    // let p = document.querySelector(".burn-in");
    //e = shuffle(e.chars);
    const tl = gsap.timeline();
    tl.addLabel("frame1")
        .from(
            ".burn-in",
            {
                duration: 0.5,
                stagger: 0.01,
                autoAlpha: 0,
                y: 5,
                textShadow: "0px 0px 16px rgb(255, 255, 255)",
                color: "transparent",
            },
            "frame1"
        )

        .addLabel("frame2")
        .to(".burn-in", {
            duration: 1.5,
            stagger: 0.02,
            autoAlpha: 1,
            y: 0,
            textShadow: "0px 0px 0px rgb(255, 255, 255)",
            color: "fff",
        });
}



export default function WhoIsMidori() {
    gsap.registerPlugin(SplitText, ScrollTrigger);


    useEffect(() => {
            const tl = gsap.timeline();

            const lines = document.querySelector(".lineSplit");
            if (lines) {
                const split = new SplitText(lines, {
                    // type: "lines",
                    linesClass: "line++",
                    tag: "span"
                });

                split.lines.map((line) => {
                    const wrapper = document.createElement("div");
                    const sp = document.createElement("span");
                    sp.classList.add("whois-mask");
                    line.parentElement!.insertBefore(wrapper, line);
                    wrapper.appendChild(line);
                    wrapper.classList.add("relative");
                    // wrapper.classList.add("inline-block");
                    wrapper.appendChild(sp);
                    // const sp = document.createElement("span");
                    // sp.classList.add("whois-mask");
                    // line.parentElement!.appendChild(sp);
                });
            }

            gsap.to(".whois-mask", {
                scrollTrigger: {
                    trigger: ".whois-mask-container",
                    start: "top 70%",
                    end: "bottom 60%",
                    markers: false,
                    scrub: true,
                },
                x: "+100%",
                stagger: 2,
                duration: 6,
                ease: "power2.inOut",
            });

            // gsap.to(".section-title", {
            //     scrollTrigger: {
            //         trigger: ".section-header",
            //         markers: true,
            //         start: "top 80%",
            //         end: "bottom 60%",
            //         scrub: true,
            //     },
            //     autoAlpha: 1,
            // })


    },[]);

    return (
        <section id={"whoIsContainer"} className={"min-h-screen max-w-[85vw] m-auto flex items-center justify-center mb-28"}>
            <div className={"flex flex-col"}>
                <SectionHeader title={"Who is Midori?"} />
                <div className={"whois-mask-container"}>
                    <p
                        className={"lineSplit text-5xl lg:text-7xl font-bold leading-normal lg:leading-normal whois-content"}>
                        There’s two ways to answer this, the official way: Midori Creative is a creative studio focused on helping Chinese brands create high end brand content that resonates with audiences around the world... the way we prefer is: we’re storytellers first and foremost that just like to create cool stuff.
                        We believe that the power of a great story can truly change things for the better, no matter who you are or where you live.
                        Midori and her team of global dreamers, storytellers, alchemists, and whatever other crazy word you can think of are here to do just that, because in the end we feel we’re really here to do one thing and one thing only: make new worlds 🌎
                    </p>
                </div>
            </div>
        </section>
    )
}