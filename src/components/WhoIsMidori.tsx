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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                        nobis quidem numquam cum aspernatur dolorem rem, molestias id
                        omnis architecto. Nisi doloribus voluptate explicabo maxime,
                        impedit sed eaque? Vel, provident? Repellendus esse voluptatem
                        quae debitis ipsum veniam harum numquam quidem delectus. Aliquam
                        corporis quidem unde. Unde, iure, alias similique dolorum
                        voluptas culpa, eveniet velit harum commodi aliquid quam
                        voluptatem nobis. Voluptates recusandae voluptatum facilis
                        delectus laudantium qui animi exercitationem at ipsum est.
                        Voluptatum sed, rerum hic ducimus, doloremque, eaque inventore
                        illo aliquid aperiam illum blanditiis sequi exercitationem
                        pariatur numquam fugiat. Similique, itaque facere et dolor
                        laborum voluptates eveniet? Id quod saepe cum, rem neque, quam
                        ipsam nihil quidem, nostrum harum accusantium quo nam quasi ex
                        cumque omnis consectetur deserunt laudantium!

                    </p>
                </div>
            </div>
        </section>
    )
}