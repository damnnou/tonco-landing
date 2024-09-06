import Image from "next/image";
import bg from "@/assets/bg.png";
import leftTonCoins from "@/assets/left-ton.png";
import rightTonCoins from "@/assets/right-ton.png";
import pea from "@/assets/pea.png";
import Button from "@/components/common/Button";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-between w-full mb-12 tall:h-screen h-[900px]">
            <div className="w-full tall:h-screen h-[900px] absolute -z-10 top-0 left-0 overflow-hidden">
                <Image className="object-cover w-full h-full" quality={100} alt="background-image" src={bg} />
            </div>
            <Image className="absolute -z-10 left-0 top-0" quality={100} alt="left-ton-coins" src={leftTonCoins} />
            <Image className="absolute -z-10 right-0 top-0" quality={100} alt="right-ton-coins" src={rightTonCoins} />
            <div className="flex flex-col h-72 items-center gap-8 tall:my-auto mt-80 justify-between relative">
                <Image className="absolute -top-[350px] animate-gravity tall:scale-100" quality={100} alt="pea" src={pea} />
                <h1 className="text-[80px] text-center max-md:max-w-full max-md:text-4xl max-md:leading-10 font-extended leading-[80px]">
                    The First <br /> Concentrated <br /> Liquidity DEX on TON
                </h1>
                <p className="text-xl leading-7 text-center w-[700px] max-md:max-w-full">
                    Swap, provide liquidity, farm & earn points to boost your crypto assets with Concentrated Liquidity AMM, Dynamic Fees,
                    Plugins & Tap-to-Earn mechanics.
                </p>
                <Button className="w-56 mx-auto" variant="action">
                    Launch_App
                </Button>
            </div>
        </section>
    );
}
