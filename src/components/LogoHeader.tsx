import {useEffect} from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

export default function LogoHeader() {


    return (
        <section className={"min-h-screen flex justify-center items-center"}>
            <img src={"/midori.svg"} id={"midori-logo"} alt={"Midori logo"} className={"w-1/2 mx-auto"} />
        </section>
    )
}