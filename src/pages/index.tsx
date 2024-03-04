import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect } from "react";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import gsap from "gsap-trial";
import WhoIsMidori from "@/components/WhoIsMidori";
import LogoHeader from "@/components/LogoHeader";
import TagLine from "@/components/TagLine";
import WhatDoesSheDo from "@/components/WhatDoesSheDo";
import BestOf from "@/components/BestOf";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      smooth: 10, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, []);

  return (
    <main
      // className={`${inter.className}`}
      id={"smooth-wrapper"}
    >
      <div id={"smooth-content"}>
        {/* <LogoHeader /> */}
        {/*<TagLine />*/}
        {/* <WhoIsMidori />
        <WhatDoesSheDo /> */}
        <BestOf />
      </div>
    </main>
  );
}
