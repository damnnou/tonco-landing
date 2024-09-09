import gsap from "gsap";
import * as React from "react";

export default function Tap2EarnSection() {
    React.useEffect(() => {
        gsap.fromTo(
            "#tap-to-earn-section",
            { y: 600 }, // начальное состояние
            {
                y: 500,
                duration: 0.5, // длительность анимации
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#tap-to-earn-section",
                    start: "top 100%", // начало анимации
                    end: "top",
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
            className="flex overflow-hidden flex-wrap gap-10 justify-center items-start p-8 bg-pink-900 rounded-xl max-md:px-5"
        >
            <div className="flex flex-col flex-1 shrink text-red-100 basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-7xl font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    The Tap-to-Earn Capabilities
                </div>
                <div className="mt-16 text-2xl tracking-wider leading-9 max-md:mt-10 max-md:max-w-full">
                    Tap, play & invite frens - all in one place - to gain points & get your portion of rewards.Get higher rewards by
                    completing social tasks & spread the word to engage with a vivid ecosystem of TONCO
                </div>
            </div>
            <div
                id="tap-to-earn-img"
                className="flex overflow-hidden flex-col rounded-xl bg-zinc-300 min-w-[240px] w-[600px] max-md:max-w-full"
            >
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f6e90436d4f628d0e4c2bafaddda2e94d531b53f0a21c6c34470c05edd32626?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                    className="object-contain w-full rounded-none aspect-square max-md:max-w-full"
                />
            </div>
        </section>
    );
}
