import * as React from "react";

export default function RoadmapSection() {
    return (
        <div className="flex overflow-hidden flex-col w-full p-16 my-8 text-black rounded-xl bg-[#EFF7F5] max-md:px-5">
            <div className="text-7xl font-extraboldExt leading-none max-md:max-w-full max-md:text-4xl">Roadmap</div>
            <div className="flex flex-wrap gap-10 justify-center items-start mt-32 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col grow shrink min-w-[240px] w-[298px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f7db83b635e24e153fb3c41eee9314f15496d27529b6bd9a7321957f8e6bf0?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                        className="object-contain max-w-full aspect-square w-[257px]"
                    />
                    <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
                        <div className="text-4xl font-extraboldExt tracking-tighter leading-none">Q3 2024</div>
                        <div className="mt-8 text-2xl tracking-wider leading-9">
                            Development & testnet launch
                            <br />
                            Audits 
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink min-w-[240px] w-[298px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8505b4d767da243e14f38a26aa52ee20330aa2306093aa4bda03ab99f453fc4?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                        className="object-contain max-w-full aspect-square w-[257px]"
                    />
                    <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
                        <div className="text-4xl font-extraboldExt tracking-tighter leading-none">Q4 2024</div>
                        <div className="mt-8 text-2xl tracking-wider leading-9">
                            Mainnet launch on TON
                            <br />
                            More partnerships with TON-based projects
                        </div>
                    </div>
                </div>
                <div className="flex flex-col grow shrink min-w-[240px] w-[299px]">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f60bd96f17f4492ca914a2b1c95d3d43847df3479974d11938edc84305221b2?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                        className="object-contain max-w-full aspect-square w-[257px]"
                    />
                    <div className="flex flex-col justify-center mt-16 w-full max-md:mt-10">
                        <div className="text-4xl font-extraboldExt tracking-tighter leading-none">Q1-Q2 2025</div>
                        <div className="mt-8 text-2xl tracking-wider leading-9">
                            Farming events
                            <br />
                            TON App Listing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
