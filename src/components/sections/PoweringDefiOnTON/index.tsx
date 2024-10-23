import Button from '@/components/common/Button';

export default function PoweringDefiOnTON() {
    return (
        <div className="flex flex-col gap-24 items-center w-full bg-background p-8 md:p-[156px]">
            <div className="flex flex-col max-w-full text-center w-[920px]">
                <h2 className="text-7xl font-semibold tracking-tighter leading-none text-primary max-md:max-w-full max-md:text-4xl">
                    Powering DeFi on TON
                </h2>
                <p className="mt-6 text-2xl text-gray-800 max-md:max-w-full">
                    Advanced Features for a Smarter DEX Experience
                </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-center self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col grow shrink self-stretch px-6 pt-36 pb-16 my-auto bg-white rounded-3xl min-h-[363px] min-w-[240px] w-[290px] max-md:px-5 max-md:pt-24">
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none text-primary">
                        Dynamic Fees
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Unlike static pool fees, TONCO adapts fees based on pair
                        volatility, increasing profitability by up to 20%.
                    </div>
                </div>
                <div className="flex flex-col grow shrink self-stretch px-6 pt-36 pb-10 my-auto bg-white rounded-3xl min-h-[363px] min-w-[240px] w-[290px] max-md:px-5 max-md:pt-24">
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none text-primary">
                        Built-in Farming
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Farming mechanism offering additional rewards,
                        distributed fairly. Rewards are based on liquidity
                        effectiveness and can be earned in any tokens.
                    </div>
                </div>
                <div className="flex flex-col grow shrink self-stretch px-6 pt-36 pb-16 my-auto bg-white rounded-3xl min-h-[363px] min-w-[240px] w-[290px] max-md:px-5 max-md:pt-24">
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none text-primary">
                        V4 Plugins
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Integrate dynamic fees, limit orders, trading discounts,
                        and KYC features through smart contracts built on top of
                        liquidity pools.
                    </div>
                </div>
            </div>
            <Button
                variant="primary"
                className="rounded-lg mt-16 w-fit mx-auto px-8"
            >
                Learn More about CLAMM
            </Button>
        </div>
    );
}
