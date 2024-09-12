import x from "@/assets/socials/x.svg";
import tg from "@/assets/socials/tg.svg";
import discord from "@/assets/socials/discord.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col mt-8 py-16 gap-8 max-md:gap-2 max-md:py-8 items-center w-fit justify-center relative top-[600px]">
            <div className="text-7xl text-center text-green-700 font-extended max-md:max-w-full max-md:text-[40px] max-md:leading-10">
                Follow us to stay
                <br className="max-md:hidden" /> in touch.
            </div>
            <div className="flex gap-10 items-start self-center mt-16 max-md:mt-8">
                <img
                    onClick={() => window.open("https://x.com/Tonco_io", "_blank")}
                    loading="lazy"
                    src={x.src}
                    className="object-contain shrink-0 aspect-square w-[108px] max-md:w-[75px] cursor-pointer hover:-translate-y-1 transition-all duration-200"
                />
                <img
                    onClick={() => window.open("https://t.me/tonco_io", "_blank")}
                    loading="lazy"
                    src={tg.src}
                    className="object-contain shrink-0 aspect-square w-[108px] max-md:w-[75px] cursor-pointer hover:-translate-y-1 transition-all duration-200"
                />
                {/* <img
                    // onClick={() => window.open("https://www.discord.com/tonco_io/", "_blank")}
                    loading="lazy"
                    src={discord.src}
                    className="object-contain shrink-0 aspect-square w-[108px] max-md:w-[75px] cursor-pointer hover:-translate-y-1 transition-all duration-200"
                /> */}
            </div>
            <div className="mt-16 text-base tracking-wider leading-9 text-center text-green-700 max-md:mt-8 max-md:max-w-full">
                © 2024 Tonco! All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
