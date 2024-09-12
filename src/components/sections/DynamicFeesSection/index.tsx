import gsap from "gsap";
import { useEffect } from "react";
import dynamicFeesImg from "@/assets/dynamic-fees.png";

export default function DynamicFeesSection() {
    useEffect(() => {
        gsap.fromTo(
            "#dynamic-fees-section",
            { y: 700 }, // начальное состояние
            {
                y: 600,
                duration: 0.5, // длительность анимации
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#dynamic-fees-section",
                    start: "top 100%", // начало анимации
                    end: "top",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.from("#dynamic-fees-img", {
            duration: 0.6,
            opacity: 0,
            ease: "out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: "#dynamic-fees-section",
                start: "top 80%", // Начало анимации
                end: "top",
                scrub: false,
            },
        });
    }, []);

    return (
        <section
            id="dynamic-fees-section"
            className="flex overflow-hidden flex-wrap gap-10 w-full justify-center items-start md:p-8 p-5 rounded-xl bg-neutral-900"
        >
            <div className="flex flex-col flex-1 shrink text-[#D3F7CC] basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-7xl font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Dynamic <br className="md:hidden" /> Fees
                </div>
                <div className="mt-16 text-2xl tracking-wider leading-9 max-md:mt-10 max-md:max-w-full">
                    Adapting to market conditions: a special model calculating the fee depending on risks, volatility, trading and pool’s
                    volume.
                </div>
            </div>

            <div id="dynamic-fees-img" className="flex flex-col rounded-xl bg-zinc-300 min-w-[240px] max-w-[600px] overflow-hidden">
                <img loading="lazy" src={dynamicFeesImg.src} className="object-contain w-full max-md:max-w-full" />
            </div>
        </section>
    );
}
