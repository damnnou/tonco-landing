import gsap from "gsap";
import * as React from "react";
import farmingImg from "@/assets/farming.png";

export default function FarmingSection() {
    React.useEffect(() => {
        gsap.fromTo(
            "#farming-section",
            { y: 700 }, // начальное состояние
            {
                y: 600,
                duration: 0.5, // длительность анимации
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#farming-section",
                    start: "top 100%", // начало анимации
                    end: "top",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.from("#farming-img", {
            duration: 0.6,
            opacity: 0,
            ease: "out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: "#farming-section",
                start: "top 80%", // Начало анимации
                end: "top",
                scrub: false,
            },
        });
    }, []);

    return (
        <section
            id="farming-section"
            className="flex overflow-hidden w-full flex-wrap gap-10 justify-center items-start md:p-8 p-5 bg-emerald-100 rounded-xl"
        >
            <div
                id="farming-img"
                className="flex overflow-hidden flex-col max-md:order-1 rounded-xl bg-zinc-300 min-w-[240px] w-[600px] max-md:max-w-full"
            >
                <img loading="lazy" src={farmingImg.src} className="object-contain w-full aspect-square max-md:max-w-full" />
            </div>
            <div className="flex flex-col flex-1 shrink text-lime-800 basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-7xl font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">On-chain Farming</div>
                <div className="mt-16 text-2xl tracking-wider leading-9 max-md:mt-10 max-md:max-w-full">
                    Rewarding our Liquidity Providers on-chain with extra incentives.
                </div>
            </div>
        </section>
    );
}
