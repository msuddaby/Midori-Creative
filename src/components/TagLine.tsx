import {useEffect} from "react";
import gsap from "gsap";

export default function TagLine() {

    useEffect(() => {
        // const tl = gsap.timeline();
        // tl.addLabel("frame1")
        //     .from(
        //         ".tagline",
        //         {
        //             duration: 0.5,
        //             stagger: 0.01,
        //             autoAlpha: 0,
        //             y: 5,
        //             textShadow: "0px 0px 16px rgb(255, 255, 255)",
        //             color: "transparent",
        //         },
        //         "frame1"
        //     )
        //
        //     .addLabel("frame2")
        //     .to(".tagline", {
        //         duration: 1.5,
        //         stagger: 0.02,
        //         autoAlpha: 1,
        //         y: 0,
        //         textShadow: "0px 0px 0px rgb(255, 255, 255)",
        //         color: "fff",
        //     });
        const tl = gsap.timeline();

        tl.from(".tagline", {
            scrollTrigger: {
                trigger: ".tagline",
                start: "top 100%",
                end: "bottom 1%",
                scrub: true,
                markers: true
            },
            duration: 1,
            stagger: 0.01,
            x: "100%",

        });



    }, []);

    return (
        <section className={"min-h-[20rem]"}>
            <div className={"relative"}>
                <span className={"tagline text-[10rem] font-light absolute text-nowrap translate-x-[-100%]"}>
                Midori means green Midori means green
                </span>
            </div>
        </section>
    )
}