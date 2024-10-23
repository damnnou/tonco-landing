import Button from '@/components/common/Button';

export default function WhyTONCO() {
    return (
        <div className="flex flex-col items-center w-full bg-background p-8 md:p-[156px]">
            <div className="flex flex-col max-w-full text-center  w-[920px]">
                <h2 className="text-7xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                    Why TONCO?
                </h2>
                <p className="mt-6 text-2xl max-md:max-w-full text-primary">
                    Because your capital deserves better
                </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center items-center self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col grow shrink self-stretch px-6 pt-52 pb-16 my-auto bg-white rounded-3xl min-h-[363px] min-w-[240px] w-[290px] max-md:px-5 max-md:pt-24">
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none ">
                        Why TONCO?
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Because your capital deserves better
                    </div>
                </div>
                <div className="flex flex-col grow shrink self-stretch px-6 pt-52 pb-16 my-auto bg-white rounded-3xl min-h-[363px] min-w-[240px] w-[290px] max-md:px-5 max-md:pt-24">
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none ">
                        Access Deeper Liquidity
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Trade with lower slippage, ensuring better swaps
                    </div>
                </div>
                <div className="flex flex-col grow shrink self-stretch px-6 pt-52 pb-11 my-auto bg-white rounded-3xl min-h-[363px] min-w-[240px] w-[290px] max-md:px-5 max-md:pt-24">
                    <h3 className="text-2xl font-semibold tracking-tighter leading-none ">
                        Built for all Levels
                    </h3>
                    <div className="mt-4 text-lg text-gray-800">
                        Advanced tools for pros, with a user-friendly interface
                        for newcomers
                    </div>
                </div>
            </div>
            <Button
                variant="primary"
                className="rounded-lg mt-16 w-fit mx-auto px-8"
            >
                Read the Docs
            </Button>
        </div>
    );
}
