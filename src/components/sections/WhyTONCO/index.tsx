import Button from '@/components/common/Button';
import engineered from '@/assets/whytonco/engineered.svg';
import access from '@/assets/whytonco/access.svg';
import builtfor from '@/assets/whytonco/builtfor.svg';
import peaFarmer from '@/assets/whytonco/pea-farmer.png';

export default function WhyTONCO() {
    return (
        <div className="flex flex-col items-center w-full bg-background px-4 p-8 md:p-[156px] md:py-[114px] relative rounded-3xl">
            <img
                src={peaFarmer.src}
                className="absolute w-fit bottom-0 right-24 max-md:right-0 z-0 max-md:w-36"
            />
            <div className="flex flex-col max-w-full text-center  w-[920px]">
                <h2 className="text-7xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                    Why TONCO?
                </h2>
                <p className="mt-6 text-2xl max-md:max-w-full text-primary">
                    Because your capital deserves better
                </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col grow shrink px-6 pt-6 pb-16 bg-white rounded-3xl min-w-[240px] w-[290px]">
                    <img className="w-fit mb-2" src={engineered.src} />
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none">
                        Engineered for efficiency
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Maximize returns by focusing liquidity where it’s needed
                        most
                    </div>
                </div>
                <div className="flex flex-col grow shrink px-6 pt-6 pb-16 bg-white rounded-3xl min-w-[240px] w-[290px]">
                    <img className="w-fit mb-2" src={access.src} />
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none">
                        Access Deeper Liquidity
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Trade with lower slippage, ensuring better swaps
                    </div>
                </div>
                <div className="flex flex-col grow shrink px-6 pt-6 pb-16 bg-white rounded-3xl min-w-[240px] w-[290px]">
                    <img className="w-fit mb-2" src={builtfor.src} />
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none">
                        Built for all Levels
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Advanced tools for pros, with a user-friendly interface
                        for newcomers
                    </div>
                </div>
            </div>
            <Button variant="action" className="mt-16 w-fit mx-auto px-8 z-10">
                Read the Docs
            </Button>
        </div>
    );
}
