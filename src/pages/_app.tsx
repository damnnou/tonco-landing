import "@/styles/globals.css";
import "@/styles/fonts.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ParallaxProvider>
            <Head>
                <title>TONCO - THE FIRST CONCENTRATED LIQUIDITY DEX ON TON</title>
            </Head>
            <Component {...pageProps}></Component>
        </ParallaxProvider>
    );
}
