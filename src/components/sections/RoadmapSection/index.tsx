import gsap from "gsap";
import * as React from "react";
import q3_2024 from "@/assets/roadmap/q3-2024.png";
import q4_2024 from "@/assets/roadmap/q4-2024.png";
import q1_2025 from "@/assets/roadmap/q1-2025.png";

export default function RoadmapSection() {
    React.useEffect(() => {
        gsap.fromTo(
            "#roadmap-section",
            { y: 800 }, // начальное состояние
            {
                y: 600,
                duration: 1, // длительность анимации
                scrollTrigger: {
                    trigger: "#roadmap-section",
                    start: "top 100%", // начало анимации
                    end: "top",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.fromTo(
            "#roadmap-phase",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#roadmap-section",
                    start: "top 50%", // Начало анимации
                    end: "top",
                    scrub: false,
                },
            }
        );

        gsap.fromTo(
            "#roadmap-section-inner",
            { y: 200 },
            {
                y: 0,
                duration: 5,
                scrollTrigger: {
                    trigger: "#roadmap-section",
                    start: "top 80%", // начало анимации
                    end: "top 10%",
                    scrub: true, // привязка к скроллу
                },
            }
        );
    }, []);

    return (
        <section
            id="roadmap-section"
            className="flex overflow-hidden flex-col w-full p-16 max-md:p-8 my-8 text-black rounded-xl bg-[#EFF7F5] max-md:px-5 "
        >
            <div className="flex flex-wrap gap-10 w-full" id="roadmap-section-inner">
                <div className="text-7xl font-extraboldExt leading-none max-md:max-w-full max-md:text-4xl">Roadmap</div>
                <div className="flex flex-wrap gap-10 justify-center items-start mt-32 w-full max-md:mt-10 max-md:max-w-full">
                    <div id="roadmap-phase" className="flex flex-col grow shrink min-w-[240px] w-[298px]">
                        <img loading="lazy" src={q3_2024.src} className="object-contain max-w-full aspect-square w-[257px] rounded-full" />
                        <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
                            <div className="text-4xl font-extraboldExt tracking-tighter leading-none">Q3 2024</div>
                            <ul className="mt-8 ml-5 text-2xl tracking-wider leading-9 list-disc">
                                <li>Development & testnet launch</li>
                                <li>Audits</li>
                            </ul>
                        </div>
                    </div>
                    <div id="roadmap-phase" className="flex flex-col grow shrink min-w-[240px] w-[298px]">
                        <img loading="lazy" src={q4_2024.src} className="object-contain max-w-full aspect-square w-[257px] rounded-full" />
                        <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
                            <div className="text-4xl font-extraboldExt tracking-tighter leading-none">Q4 2024</div>
                            <ul className="mt-8 ml-5 text-2xl tracking-wider leading-9 list-disc">
                                <li>Mainnet launch on TON</li>
                                <li>More partnerships with TON-based projects</li>
                            </ul>
                        </div>
                    </div>
                    <div id="roadmap-phase" className="flex flex-col grow shrink min-w-[240px] w-[299px]">
                        <img loading="lazy" src={q1_2025.src} className="object-contain max-w-full aspect-square w-[257px] rounded-full" />
                        <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
                            <div className="text-4xl font-extraboldExt tracking-tighter leading-none">Q1-Q2 2025</div>
                            <ul className="mt-8 ml-5 text-2xl tracking-wider leading-9 list-disc">
                                <li>Farming events</li>
                                <li>TON App Listing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
