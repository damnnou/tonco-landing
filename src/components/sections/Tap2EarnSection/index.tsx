import gsap from "gsap";
import * as React from "react";
import tap2earnImg from "@/assets/tap2earn.png";

export default function Tap2EarnSection() {
    React.useEffect(() => {
        gsap.fromTo(
            "#tap-to-earn-section",
            { y: 800 }, // начальное состояние
            {
                y: 600,
                duration: 1, // длительность анимации
                scrollTrigger: {
                    trigger: "#tap-to-earn-section",
                    start: "top 100%", // начало анимации
                    end: "top",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.fromTo(
            "#tap-to-earn-section-inner",
            { y: 200 },
            {
                y: 0,
                duration: 5,
                scrollTrigger: {
                    trigger: "#tap-to-earn-section",
                    start: "top 80%", // начало анимации
                    end: "top 10%",
                    scrub: true, // привязка к скроллу
                },
            }
        );

        gsap.from("#tap-to-earn-img", {
            duration: 0.6,
            opacity: 0,
            ease: "out",
            stagger: 0.01,
            scrollTrigger: {
                trigger: "#tap-to-earn-section",
                start: "top 80%", // Начало анимации
                end: "top",
                scrub: false,
            },
        });
    }, []);

    return (
        <section
            id="tap-to-earn-section"
            className="flex overflow-hidden flex-wrap gap-10 w-full justify-center items-start md:p-8 p-5 pb-6 bg-pink-900 rounded-xl"
        >
            <div className="flex flex-wrap gap-10 w-full" id="tap-to-earn-section-inner">
                <div className="flex flex-col flex-1 shrink text-red-100 basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="text-7xl font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                        The Tap-to-Earn Capabilities
                    </div>
                    <div className="mt-16 text-2xl tracking-wider leading-9 max-md:mt-10 max-md:max-w-full flex flex-col gap-8">
                        <span>Tap, play & invite frens - all in one place - to gain points & get your portion of rewards. </span>
                        <span>
                            Get higher rewards by completing social tasks & spread the word to engage with a vivid ecosystem of TONCO
                        </span>
                    </div>
                </div>
                <div
                    id="tap-to-earn-img"
                    className="flex overflow-hidden flex-col rounded-lg bg-zinc-300 min-w-[240px] w-[600px] max-md:max-w-full"
                >
                    <img
                        loading="lazy"
                        src={tap2earnImg.src}
                        className="object-contain w-full scale-105 rounded-none aspect-square max-md:max-w-full"
                    />
                </div>
            </div>
        </section>
    );
}
