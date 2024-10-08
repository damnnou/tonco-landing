import * as React from "react";

export default function ComparisonTable() {
    return (
        <div className="flex flex-col w-full max-md:hidden">
            <div className="flex flex-col w-full text-black max-md:max-w-full">
                <div className="flex flex-wrap gap-10 justify-center items-center px-6 pb-2 w-full rounded-xl max-md:px-5 max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto text-xl tracking-wider leading-9 basis-0"></div>
                    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
                        <div className="text-2xl font-extraboldExt">Concentrated Liquidity</div>
                        <div className="text-lg font-regularExt">V3 AMM</div>
                    </div>
                    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
                        <div className="text-2xl font-extraboldExt">Classic DEXs</div>
                        <div className="text-lg font-regularExt">V2 AMM</div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center p-6 mt-1 w-full text-2xl leading-loose bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto text-xl leading-9 text-right text-green-700 basis-0">
                        Capital Efficiency
                    </div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">95% more efficient compared to V2</div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">Proportional fee distribution</div>
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center p-6 mt-1 w-full text-2xl leading-loose bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto text-xl leading-9 text-right text-green-700 basis-0">
                        Fees Mechanism
                    </div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">Dynamic, Volatility-based</div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">Fixed</div>
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center p-6 mt-1 w-full text-2xl leading-9 bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto text-xl text-right text-green-700 basis-0">Liquidity</div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">Concentrated, can be placed on a narrow price range</div>
                    <div className="flex-1 shrink self-stretch my-auto leading-loose basis-0">Spread across all price range</div>
                </div>
                <div className="flex flex-wrap gap-10 justify-center items-center p-6 mt-1 w-full text-2xl leading-loose bg-white rounded-xl max-md:px-5 max-md:max-w-full">
                    <div className="flex-1 shrink self-stretch my-auto text-xl leading-9 text-right text-green-700 basis-0">
                        Impermanent Loss
                    </div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">Can be prevented entirely</div>
                    <div className="flex-1 shrink self-stretch my-auto basis-0">High</div>
                </div>
            </div>
        </div>
    );
}
