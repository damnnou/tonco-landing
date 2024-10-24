import Button from '@/components/common/Button';
import ComparisonTable from './ComparisonTable';
import ComparisonTableMobile from './ComparisonTableMobile';

export default function NextGenLiquidity() {
    return (
        <div className="flex flex-col gap-24 items-center w-full bg-white dark:bg-dark-background px-4 p-8 md:p-[156px] md:px-24">
            <div className="flex flex-col max-w-full  w-full">
                <h2 className="text-7xl text-center font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                    Next-Gen Liquidity <br /> Model
                </h2>
                <p className="mt-6 mb-24 max-md:mb-8 text-center text-2xl max-md:max-w-full">
                    Achieve up to 95% capital efficiency over traditional AMMs
                    on TON
                </p>

                <ComparisonTable />
                <ComparisonTableMobile />

                <Button variant="action" className="mt-16 w-fit mx-auto px-8">
                    Learn More about CLAMM
                </Button>
            </div>
        </div>
    );
}
