import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const target = location.hash.replace("#", "");
            setTimeout(() => {
                scroller.scrollTo(target, {
                    smooth: true,
                    duration: 500,
                    offset: -70,
                });
            }, 100);
        }
    }, [location]);

    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <ContactMe />
        </>
    );
}