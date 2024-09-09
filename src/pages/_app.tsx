import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ParallaxProvider>
            <Component {...pageProps}></Component>
        </ParallaxProvider>
    );
}
