import peaBlackHole from "@/assets/pea-blackhole.png";
import greenConcLiq from "@/assets/green-concLiq.png";
import purpleConcLiq from "@/assets/purple-concLiq.png";
import BenefitsCard from "./BenefitsCard";
import ComparisonTable from "./ComparisonTable";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import ComparisonTableMobile from "./ComparisonTableMobile";

export default function ConcentratedLiqSection() {
    useEffect(() => {
        gsap.fromTo(
            "#concentrated-liquidity-section",
            { y: 600 }, // начальное состояние
            {
                y: 600,
                duration: 0.5, // длительность анимации
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#concentrated-liquidity-section",
                    start: "top 20%", // начало анимации
                    end: "top",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.fromTo(
            "#benefits-card-green",
            { y: 200 },
            {
                y: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#pea-blackhole",
                    start: "top 10%", // начало анимации
                    end: "bottom -40%",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.fromTo(
            "#benefits-card-white",
            { y: 400 },
            {
                y: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#pea-blackhole",
                    start: "top 10%", // начало анимации
                    end: "bottom -40%",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.fromTo(
            "#pea-blackhole",
            { scale: 0.5 },
            {
                // keyframes: [{ scale: 1.1 }, { scale: 1 }],
                duration: 0.5,
                ease: "power2.out",
                scale: 1,
                scrollTrigger: { trigger: "#concentrated-liquidity-section", start: "top 70%", end: "top", scrub: true },
            }
        );

        const comparisonTitle = new SplitType("#comparison-title");
        gsap.from(comparisonTitle.chars, {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50%",
            ease: "back",
            stagger: 0.01,
            scrollTrigger: {
                trigger: "#benefits-card-white",
                start: "top 30%", // Начало анимации
                scrub: false,
            },
        });
    }, []);

    return (
        <section
            id="concentrated-liquidity-section"
            className="bg-[#ECEFF3] w-full flex flex-col p-16 max-md:p-4 max-md:pb-5 gap-16 max-md:gap-4 rounded-xl"
        >
            <div className="flex flex-wrap max-md:flex-col gap-10 items-center w-full max-md:max-w-full">
                <h1 className="self-stretch my-auto text-7xl text-green-700 font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Concentrated <br /> Liquidity
                </h1>
                <p className="flex-1 text-[26px] max-md:text-[20px] shrink self-stretch my-auto tracking-wider leading-9 text-black basis-0 max-md:max-w-full">
                    Efficient use of capital – boosts capital efficiency up to 95% compared to traditional V2 DEXs.
                </p>
            </div>
            <div id="pea-blackhole" className="rounded-xl w-full max-md:h-[360px] overflow-hidden">
                <img
                    className="object-cover h-full w-full max-md:scale-[180%] max-md:translate-y-28 max-md:-translate-x-6"
                    alt="peaBlackHole"
                    src={peaBlackHole.src}
                />
            </div>

            <div className="flex gap-8 max-md:flex-col">
                <BenefitsCard
                    title="Benefits for traders"
                    desc="For traders, concentrated liquidity allows them to trade with lower
          slippage, as liquidity is more densely packed around specific price
          ranges, providing better trade execution."
                    img={greenConcLiq.src}
                    color="green"
                />
                <BenefitsCard
                    title="Benefits for Liquidity Providers"
                    desc="For LPs, it means they can allocate their liquidity to specific price
          ranges where they expect the most trading activity. This strategy
          increases capital efficiency, allowing LPs to earn higher fees with
          less capital, as their liquidity is more effectively utilized."
                    img={purpleConcLiq.src}
                    color="white"
                />
            </div>
            <div className="flex flex-col w-full text-green-700 max-md:max-w-full">
                <div
                    id="comparison-title"
                    className="text-6xl uppercase font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10 min-w-full max-md:mt-8"
                >
                    up to 95% capital <br /> efficiency compared to <br /> traditional AMMs on TON
                </div>
                {/* <div className="mt-8 text-2xl max-md:font-extended max-md:text-black tracking-wider leading-none max-md:max-w-full">
                    <span>Concentrated Liquidity </span>
                    <span className="md:hidden">(V3 AMM) </span>
                    <span className="text-black max-md:text-green-700">vs</span>
                    <br className="md:hidden" />
                    <span>Classic DEXs </span>
                    <span className="md:hidden">(V2 AMM)</span>
                </div> */}
            </div>
            <ComparisonTable />
            <ComparisonTableMobile />
        </section>
    );
}
