import * as React from "react";

export default function FarmingSection() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-start p-8 bg-emerald-100 rounded-xl max-md:px-5">
            <div className="flex overflow-hidden flex-col rounded-xl bg-zinc-300 min-w-[240px] w-[600px] max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f86e846da51dc615941861b9e25506f4d00362839d1e41ae3a6faa02d00d2662?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                    className="object-contain w-full aspect-square max-md:max-w-full"
                />
            </div>
            <div className="flex flex-col flex-1 shrink text-lime-800 basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-7xl font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">On-chain Farming</div>
                <div className="mt-16 text-2xl tracking-wider leading-9 max-md:mt-10 max-md:max-w-full">
                    Rewarding our Liquidity Providers on-chain with extra incentives.
                </div>
            </div>
        </div>
    );
}
