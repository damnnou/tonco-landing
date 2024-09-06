import peaBlackHole from "@/assets/pea-blackhole.png";
import Image from "next/image";
import greenConcLiq from "@/assets/green-concLiq.png";
import purpleConcLiq from "@/assets/purple-concLiq.png";
import BenefitsCard from "./BenefitsCard";
import ComparisonTable from "./ComparisonTable";

export default function ConcentratedLiqSection() {
    return (
        <section className="bg-[#ECEFF3] w-full flex flex-col p-16 gap-16 rounded-xl">
            <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
                <h1 className="self-stretch my-auto text-7xl text-green-700 font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Concentrated <br /> Liquidity
                </h1>
                <p className="flex-1 text-[26px] shrink self-stretch my-auto text-2xl tracking-wider leading-9 text-black basis-0 max-md:max-w-full">
                    Efficient use of capital – boosts capital efficiency up to 95% compared to traditional V2 DEXs.
                </p>
            </div>
            <Image className="rounded-xl w-full" quality={100} alt="peaBlackHole" src={peaBlackHole} />
            <div className="flex gap-8">
                <BenefitsCard
                    title="Benefits for traders"
                    desc="For traders, concentrated liquidity allows them to trade with lower
          slippage, as liquidity is more densely packed around specific price
          ranges, providing better trade execution."
                    img={greenConcLiq}
                    color="green"
                />
                <BenefitsCard
                    title="Benefits for Liquidity Providers"
                    desc="For LPs, it means they can allocate their liquidity to specific price
          ranges where they expect the most trading activity. This strategy
          increases capital efficiency, allowing LPs to earn higher fees with
          less capital, as their liquidity is more effectively utilized."
                    img={purpleConcLiq}
                    color="white"
                />
            </div>
            <div className="flex flex-col w-full text-green-700 max-md:max-w-full">
                <div className="text-6xl uppercase font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    up to 95% capital efficiency compared to traditional AMMs on TON
                </div>
                <div className="mt-8 text-2xl tracking-wider leading-none max-md:max-w-full">
                    Concentrated Liquidity <span className="text-black">vs</span> Classic DEXs
                </div>
            </div>
            <ComparisonTable />
        </section>
    );
}
