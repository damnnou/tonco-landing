import { useEffect, useState } from 'react';
import AvantGardeSection from '../sections/AvantGardeSection';
import ConcentratedLiqSection from '../sections/ConcentratedLiqSection';
import DynamicFeesSection from '../sections/DynamicFeesSection';
import FarmingSection from '../sections/FarmingSection';
import HeroSection from '../sections/HeroSection';
import RoadmapSection from '../sections/RoadmapSection';
import Tap2EarnSection from '../sections/Tap2EarnSection';
import WhyTONCO from '../sections/WhyTONCO';
import NextGenLiquidity from '../sections/NextGenLiquidity';
import PoweringDefiOnTON from '../sections/PoweringDefiOnTON';
import FAQ from '../sections/FAQ';

const Main = () => {
    // const [hasScrolled, setHasScrolled] = useState(false);

    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0 && !hasScrolled) {
    //             setHasScrolled(true);
    //             // setTimeout(() => {
    //             window.scrollTo({
    //                 top: window.innerHeight < 820 ? 0 : window.innerHeight + 100,
    //                 behavior: "smooth",
    //             });
    //             // }, 100);
    //         }
    //     };

    //     window.addEventListener("wheel", handleScroll);

    //     return () => {
    //         window.removeEventListener("wheel", handleScroll);
    //     };
    // }, [hasScrolled]);

    return (
        <main className="flex flex-col gap-8 px-8 max-md:px-0 items-center w-full">
            <HeroSection />
            <WhyTONCO />
            <NextGenLiquidity />
            <PoweringDefiOnTON />
            <FAQ />
            {/* <AvantGardeSection />
            <ConcentratedLiqSection />
            <DynamicFeesSection />
            <FarmingSection />
            <Tap2EarnSection />
            <RoadmapSection /> */}
        </main>
    );
};

export default Main;
