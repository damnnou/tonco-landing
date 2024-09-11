import bg from "@/assets/bg.png";
import leftTonCoins from "@/assets/left-ton.png";
import rightTonCoins from "@/assets/right-ton.png";
import pea from "@/assets/pea.png";
import Button from "@/components/common/Button";
import { Parallax } from "react-scroll-parallax";
import xLogo from "@/assets/xLogo.svg";
import { BookLogo } from "@/components/layout/Header";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-between w-full tall:h-screen h-[900px] max-md:pb-8 max-md:h-screen text-white">
            <div className="w-full tall:h-screen h-[900px] absolute -z-10 top-0 left-0 overflow-hidden max-md:h-screen max-md:max-h-screen">
                <img className="object-cover w-full h-full" alt="background-image" src={bg.src} />
            </div>
            <Parallax className="absolute -z-10 left-0 top-0 animate-left-in max-md:w-[145px] max-md:-top-12" speed={-20}>
                <img alt="left-ton-coins" src={leftTonCoins.src} />
            </Parallax>

            <Parallax className="absolute -z-10 right-0 top-0 animate-right-in max-md:w-[192px]" speed={0}>
                <img alt="right-ton-coins" src={rightTonCoins.src} />
            </Parallax>

            <div className="flex flex-col h-72 items-center gap-8 max-md:gap-6 tall:my-auto max-md:my-auto mt-72 justify-between relative">
                <img
                    className="absolute -top-[340px] max-md:-top-[180px] animate-gravity-pea-fly-in max-md:w-[180px]"
                    alt="pea"
                    src={pea.src}
                />
                <h1 className="flex flex-col text-[80px] text-center max-md:max-w-full max-md:text-[36px] max-md:leading-10 font-extended leading-[80px] text-white">
                    <span className="opacity-0 animate-text-fly-in animate-fill-forwards" style={{ animationDelay: "0s" }}>
                        The First
                    </span>
                    <span className="opacity-0 animate-text-fly-in animate-fill-forwards" style={{ animationDelay: "0.3s" }}>
                        Concentrated
                    </span>
                    <span className="opacity-0 animate-text-fly-in animate-fill-forwards" style={{ animationDelay: "0.6s" }}>
                        Liquidity DEX <br className="md:hidden" /> on TON
                    </span>
                </h1>
                <p
                    style={{ animationDelay: "1.2s" }}
                    className="text-xl leading-7 text-center w-[700px] max-md:max-w-[358px] animate-fade delay-1000 text-white"
                >
                    Swap, provide liquidity, farm & earn points to boost your crypto assets with Concentrated Liquidity AMM, Dynamic Fees,
                    Plugins & Tap-to-Earn mechanics.
                </p>

                <div className="flex gap-4 animate-fade" style={{ animationDelay: "1.2s" }}>
                    <Button className="mx-auto " variant="action">
                        App Soon
                    </Button>
                    <Button
                        className="text-white px-8 font-extraboldExt md:hidden"
                        onClick={() => window.open("https://x.com/Tonco_io", "_blank")}
                        variant="secondary"
                    >
                        <img alt="x" src={xLogo.src} />
                    </Button>
                    <Button
                        onClick={() => window.open("https://docs.tonco.io", "_blank")}
                        variant="secondary"
                        className="text-white px-8 font-extraboldExt md:hidden"
                    >
                        <BookLogo />
                    </Button>
                </div>
            </div>
        </section>
    );
}
