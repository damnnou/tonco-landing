import HeroSection from '../sections/HeroSection';
import WhyTONCO from '../sections/WhyTONCO';
import NextGenLiquidity from '../sections/NextGenLiquidity';
import PoweringDefiOnTON from '../sections/PoweringDefiOnTON';
import FAQ from '../sections/FAQ';
import { useEffect, useState } from 'react';

const Main = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    // useEffect(() => {
    //     window.scrollTo({ top: 1280, behavior: 'smooth' });
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 && !hasScrolled) {
                setHasScrolled(true);
                // setTimeout(() => {
                window.scrollTo({
                    top:
                        window.innerHeight < 820 ? 0 : window.innerHeight - 180,
                    behavior: 'smooth',
                });
                // }, 100);
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [hasScrolled]);

    return (
        <main className="flex flex-col gap-8 px-8 max-md:px-0 items-center w-full">
            <HeroSection />
            <WhyTONCO />
            <NextGenLiquidity />
            <PoweringDefiOnTON />
            <FAQ />
        </main>
    );
};

export default Main;
