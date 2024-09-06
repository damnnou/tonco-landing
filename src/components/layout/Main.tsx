import AvantGardeSection from "../sections/AvantGardeSection";
import ConcentratedLiqSection from "../sections/ConcentratedLiqSection";
import DynamicFeesSection from "../sections/DynamicFeesSection";
import FarmingSection from "../sections/FarmingSection";
import HeroSection from "../sections/HeroSection";
import RoadmapSection from "../sections/RoadmapSection";
import Tap2EarnSection from "../sections/Tap2EarnSection";

const Main = () => {
    return (
        <main className="flex flex-col gap-8 px-8 max-md:px-5 items-center">
            <HeroSection />
            <AvantGardeSection />
            <ConcentratedLiqSection />
            <DynamicFeesSection />
            <FarmingSection />
            <Tap2EarnSection />
            <RoadmapSection />
        </main>
    );
};

export default Main;
