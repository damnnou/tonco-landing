import Button from '@/components/common/Button';
import pea from '@/assets/hero-char.png';
import WaitlistModal from '@/components/WaitlistModal';

export default function HeroSection() {
    return (
        <section
            id="hero-section"
            className="flex flex-col items-center justify-between w-full h-screen md:min-h-[900px] max-md:pb-8 max-md:h-screen text-white"
        >
            <div className="flex flex-col h-[400px] max-md:mt-72 items-center gap-8 max-md:gap-6 max-md:h-[80px] my-auto md:translate-y-40 overflow-visible justify-between relative">
                <img
                    className="overflow-visible w-[250px] absolute -top-[300px] max-md:-top-[180px] animate-gravity-pea-fly-in max-md:w-[180px]"
                    alt="pea"
                    src={pea.src}
                />
                <h1 className="flex flex-col text-[80px] text-center max-md:max-w-full max-md:text-[36px] max-md:leading-10 font-extended leading-[80px]">
                    <span
                        className="opacity-0 animate-text-fly-in animate-fill-forwards"
                        style={{ animationDelay: '0s' }}
                    >
                        The First DEX on TON
                    </span>
                    <span
                        className="opacity-0 animate-text-fly-in animate-fill-forwards"
                        style={{ animationDelay: '0.3s' }}
                    >
                        with Concentrated
                    </span>
                    <span
                        className="opacity-0 animate-text-fly-in animate-fill-forwards"
                        style={{ animationDelay: '0.6s' }}
                    >
                        Liquidity
                    </span>
                </h1>
                <p
                    style={{ animationDelay: '1.2s' }}
                    className="text-xl leading-7 text-center w-[700px] max-md:max-w-[358px] animate-fade delay-1000"
                >
                    TONCO helps you maximize every trade, delivering capital
                    efficiency for both liquidity providers and traders
                </p>

                <div
                    className="flex gap-4 animate-fade"
                    style={{ animationDelay: '1.2s' }}
                >
                    <WaitlistModal />
                    <Button
                        disabled
                        // onClick={() => window.open("https://testnet.tonco.io", "_blank")}
                        className="mx-auto hover:!translate-y-0"
                        variant="action"
                    >
                        Launching Soon
                    </Button>
                </div>
            </div>
        </section>
    );
}
