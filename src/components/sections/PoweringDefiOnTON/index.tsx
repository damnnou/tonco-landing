import Button from '@/components/common/Button';
import peaAngry from '@/assets/poweringdefi/pea-angry.png';
import dynamicFees from '@/assets/poweringdefi/dynamic-fees.svg';
import farming from '@/assets/poweringdefi/farming.svg';
import v4Plugins from '@/assets/poweringdefi/v4-plugins.svg';

export default function PoweringDefiOnTON() {
    return (
        <div className="flex flex-col gap-12 items-center w-full bg-background dark:bg-primary/5 px-4 p-8 md:p-[156px] md:py-[114px]  relative  rounded-3xl">
            <img
                className="absolute top-24 left-12 max-md:top-48 max-md:left-0 max-md:w-44"
                src={peaAngry.src}
            />
            <div className="flex flex-col max-w-full text-center w-[920px] z-10">
                <h2 className="text-7xl font-semibold tracking-tighter leading-none text-primary max-md:max-w-full max-md:text-4xl">
                    Powering DeFi on TON
                </h2>
                <p className="mt-6 text-2xl text-gray-800 dark:text-white max-md:max-w-full">
                    Advanced Features for a Smarter DEX Experience
                </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-center self-stretch mt-16 h-fit w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-center items-stretch mt-16 w-full">
                    <div className="flex flex-col grow shrink px-6 pt-6 pb-16 bg-white dark:bg-dark-background rounded-3xl min-w-[240px] w-[290px]">
                        <img className="w-fit mb-2" src={dynamicFees.src} />
                        <h3 className="text-2xl font-semibold tracking-tighter leading-none text-primary">
                            Dynamic Fees
                        </h3>
                        <div className="mt-4 text-lg text-gray-800 dark:text-white">
                            Unlike static pool fees, TONCO adapts fees based on
                            pair volatility, increasing profitability by up to
                            20%.
                        </div>
                    </div>
                    <div className="flex flex-col grow shrink px-6 pt-6 pb-16 bg-white dark:bg-dark-background rounded-3xl min-w-[240px] w-[290px]">
                        <img className="w-fit mb-2" src={farming.src} />
                        <h3 className="text-2xl font-semibold tracking-tighter leading-none text-primary">
                            Built-in Farming
                        </h3>
                        <div className="mt-4 text-lg text-gray-800 dark:text-white">
                            Farming mechanism offering additional rewards,
                            distributed fairly. Rewards are based on liquidity
                            effectiveness and can be earned in any tokens.
                        </div>
                    </div>
                    <div className="flex flex-col grow shrink px-6 pt-6 pb-16 bg-white dark:bg-dark-background rounded-3xl min-w-[240px] w-[290px]">
                        <img className="w-fit mb-2" src={v4Plugins.src} />
                        <h3 className="text-2xl font-semibold tracking-tighter leading-none text-primary">
                            V4 Plugins
                        </h3>
                        <div className="mt-4 text-lg text-gray-800 dark:text-white">
                            Integrate dynamic fees, limit orders, trading
                            discounts, and KYC features through smart contracts
                            built on top of liquidity pools.
                        </div>
                    </div>
                </div>
            </div>
            <Button
                variant="action"
                className="mt-16 max-md:mb-4 max-md:mt-0 w-fit mx-auto px-8"
            >
                Try it Out
            </Button>
        </div>
    );
}
