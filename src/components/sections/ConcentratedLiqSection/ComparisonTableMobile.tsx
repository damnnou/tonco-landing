import * as React from "react";

export default function ComparisonTableMobile() {
    return (
        <div className="flex flex-col w-full md:hidden">
            <div className="flex overflow-hidden flex-col px-2 py-3 w-full bg-white rounded-xl">
                <div className="text-xl text-green-700">Capital Efficiency</div>
                <div className="flex flex-col mt-2 w-full">
                    <div className="flex gap-6 items-center p-2 w-full bg-gray-100 rounded">
                        <div className="flex items-center justify-center gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm text-white bg-green-700 rounded-[60px] w-24">
                            TONCO
                        </div>
                        <div className="flex-1 shrink my-auto text-base text-black basis-4 font-[950]">
                            95% more efficient compared to V2
                        </div>
                    </div>
                    <div className="flex gap-6 items-center p-2 w-full text-black">
                        <div className="gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm bg-gray-100 rounded-[60px] h-8">Other Dexes</div>
                        <div className="flex-1 shrink self-stretch my-auto text-base basis-4">Proportional fee distribution</div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col px-2 py-3 mt-2 w-full bg-white rounded-xl">
                <div className="text-xl text-green-700">Fees Mechanism</div>
                <div className="flex flex-col mt-2 w-full">
                    <div className="flex gap-6 items-center py-2 pr-1.5 pl-2 w-full bg-gray-100 rounded">
                        <div className="flex items-center justify-center w-24 gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm text-white bg-green-700 rounded-[60px]">
                            TONCO
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-base text-black basis-4 font-[950]">
                            Dynamic, Volatility-based
                        </div>
                    </div>
                    <div className="flex gap-6 items-center p-2 w-full text-black">
                        <div className="gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm bg-gray-100 rounded-[60px]">Other Dexes</div>
                        <div className="flex-1 shrink self-stretch my-auto text-base basis-4">Fixed</div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col px-2 py-3 mt-2 w-full bg-white rounded-xl">
                <div className="text-xl text-green-700">Liquidity</div>
                <div className="flex flex-col mt-2 w-full">
                    <div className="flex gap-6 items-center p-2 w-full bg-gray-100 rounded">
                        <div className="flex items-center justify-center w-24 gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm text-white bg-green-700 rounded-[60px]">
                            TONCO
                        </div>
                        <div className="flex-1 shrink my-auto text-base text-black basis-4 font-[950]">
                            Concentrated, can be placed on a narrow price range
                        </div>
                    </div>
                    <div className="flex gap-6 items-center p-2 w-full text-black">
                        <div className="gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm bg-gray-100 rounded-[60px]">Other Dexes</div>
                        <div className="flex-1 shrink self-stretch my-auto text-base basis-4">Spread across all price range</div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col px-2 py-3 mt-2 w-full bg-white rounded-xl">
                <div className="text-xl text-green-700">Impermanent Loss</div>
                <div className="flex flex-col mt-2 w-full">
                    <div className="flex gap-6 items-center py-2 pr-1.5 pl-2 w-full bg-gray-100 rounded">
                        <div className="flex items-center justify-center w-24 gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm text-white bg-green-700 rounded-[60px]">
                            TONCO
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-base text-black basis-4 font-[950]">
                            Can be prevented entirely
                        </div>
                    </div>
                    <div className="flex gap-6 items-center p-2 w-full text-black">
                        <div className="gap-2.5 self-stretch px-2 py-1.5 my-auto text-sm bg-gray-100 rounded-[60px]">Other Dexes</div>
                        <div className="flex-1 shrink self-stretch my-auto text-base basis-4">High</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
