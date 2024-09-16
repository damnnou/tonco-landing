import React, { useEffect } from "react";
import Button from "../common/Button";
import TONCOLogo from "../common/TONCOLogo";
import XLogo from "../common/XLogo";
import gsap from "gsap";
import MenuLogo from "../common/MenuLogo";
import TgLogo from "../common/TgLogo";
import { X } from "lucide-react";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    useEffect(() => {
        gsap.fromTo(
            "header",
            { backgroundColor: "rgba(255, 255, 255, 0)" },
            {
                backgroundColor: "rgba(255, 255, 255,1)",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "top top",
                    end: "bottom",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            "#menu-button",
            { color: "white", borderColor: "white" },
            {
                color: "rgb(56 118 162)",
                borderColor: "rgb(56 118 162)",
                duration: 0.1,
                scrollTrigger: { trigger: "#hero-section", start: "bottom 80%", end: "bottom 80%", scrub: true },
            }
        );

        gsap.fromTo(
            "#launch-button",
            { color: "#0e7490", backgroundColor: "white", borderColor: "white" },
            {
                color: "white",
                backgroundColor: "rgb(56 118 162)",
                duration: 0.1,
                scrollTrigger: { trigger: "#hero-section", start: "bottom 80%", end: "bottom 80%", scrub: true },
            }
        );

        gsap.fromTo(
            "#to-fill",
            { fill: "white" },
            {
                fill: "rgb(56 118 162)",
                duration: 0.1,
                scrollTrigger: { trigger: "#hero-section", start: "bottom 80%", end: "bottom 80%", scrub: true },
            }
        );
    }, []);

    return (
        <header
            className={
                "flex z-20 w-full h-fit animate-pea-fly-in opacity-0 animate-fill-forwards animate-duration-500 fixed transition-all duration-200 max-md:flex-col overflow-hidden" +
                (menuOpen ? " max-md:h-[260px] !bg-white" : " max-md:h-[74px]")
            }
            style={{ animationDelay: "1.2s" }}
        >
            <div className="flex py-4 px-7 max-md:px-4 max-w-[1440px] w-full justify-between items-center mx-auto">
                <TONCOLogo className={menuOpen ? "!fill-[#0e7490]" : ""} />
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    id="menu-button"
                    className={"p-2 rounded-xl border border-white md:hidden" + (menuOpen ? " !border-[#0e7490]" : " ")}
                >
                    {menuOpen ? <X className="!text-[#0e7490]" /> : <MenuLogo className={menuOpen ? "!fill-[#0e7490]" : ""} />}
                </button>
                <nav className="flex gap-5 items-center max-md:hidden">
                    <Button
                        id="menu-button"
                        onClick={() => window.open("https://docs.tonco.io", "_blank")}
                        variant="secondary"
                        className="px-8 font-extraboldExt"
                    >
                        Docs
                    </Button>
                    <Button id="menu-button" onClick={() => window.open("https://t.me/tonco_io", "_blank")} variant="secondary">
                        <TgLogo />
                    </Button>

                    <Button id="menu-button" onClick={() => window.open("https://x.com/Tonco_io", "_blank")} variant="secondary">
                        <XLogo />
                    </Button>
                    <Button className="hover:translate-y-0" id="launch-button" variant="primary">
                        App Soon
                    </Button>
                </nav>
            </div>
            <nav className="flex flex-col p-5 pt-0 w-full gap-5 mx-auto text-black md:hidden">
                <ul className="flex flex-col gap-2 font-extraboldExt">
                    <li className="cursor-pointer" onClick={() => window.open("https://docs.tonco.io", "_blank")}>
                        Docs
                    </li>
                    <li className="cursor-pointer" onClick={() => window.open("https://t.me/tonco_io", "_blank")}>
                        Telegram
                    </li>
                    <li onClick={() => window.open("https://x.com/Tonco_io", "_blank")} className="flex gap-1 cursor-pointer">
                        More Info
                        <svg fill="black" width="25" height="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20.015 18.367-5.366-7.61-.607-.861-3.84-5.445L9.884 4H5.166l1.15 1.632 5.106 7.24.606.86 4.102 5.817.318.451h4.718l-1.15-1.633Zm-3.006.59-4.262-6.043-.606-.86-4.945-7.012h2.127l3.999 5.67.607.86 5.207 7.386H17.01Z" />
                            <path d="m12.527 12 .639.866-.757.823L6.599 20H5.166l6.604-7.177.757-.823ZM21.166 4l-6.542 7.137-.79.863-.668-.909.791-.863 4.431-4.837L19.67 4h1.497Z" />
                        </svg>
                    </li>
                </ul>
                <Button className={menuOpen ? "!bg-[#0e7490] !text-white" : ""} id="launch-button" variant="primary">
                    App Soon
                </Button>
            </nav>
        </header>
    );
};

export default Header;
