import React, { useEffect } from "react";
import gsap from "gsap";
import FeatureItem from "./FeatureItem";
import SplitType from "split-type";

const features = ["Concentrated Liquidity", "Dynamic Fees", "Farming"];

const AvantGardeSection: React.FC = () => {
    useEffect(() => {
        const avantGardeTitle = new SplitType("#avant-garde-title");
        gsap.from(avantGardeTitle.chars, {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50%",
            ease: "back",
            stagger: 0.01,
            scrollTrigger: {
                trigger: "#avant-garde-section",
                start: "top 80%", // Начало анимации
                end: "top", // Конец анимации
                scrub: false,
            },
        });

        gsap.fromTo(
            "#feature-item",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#features-list",
                    start: "top 60%", // Начало анимации
                    end: "top", // Конец анимации
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            "#avant-garde-section",
            { y: 40 },
            {
                y: 40, // Настройте значение для фиксированного эффекта
                scrollTrigger: {
                    trigger: "#avant-garde-section",
                    start: window.innerWidth < 820 || window.innerHeight < 900 ? "top 30px" : "top 100px", // Начало фиксации
                    end: "+=400", // Продолжительность фиксации
                    scrub: true,
                    pin: true, // Фиксирует секцию на месте
                    pinSpacing: false, // Убирает дополнительное пространство после фиксации
                },
            }
        );
    }, []);

    return (
        <section id="avant-garde-section" className="flex flex-col justify-center w-full max-md:px-5">
            <h1 id="avant-garde-title" className="text-7xl text-pink-600 font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                The avant-garde tech for enhanced trading & LP experience
            </h1>
            <ul id="features-list" className="flex flex-col gap-2 mt-16 w-full text-black max-md:mt-10 max-md:max-w-full min-h-[320px]">
                {features.map((feature, index) => (
                    <FeatureItem key={index} title={feature} />
                ))}
            </ul>
        </section>
    );
};

export default AvantGardeSection;
