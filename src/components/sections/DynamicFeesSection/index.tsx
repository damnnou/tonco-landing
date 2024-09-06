export default function DynamicFeesSection() {
    return (
        <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-start p-8 rounded-xl bg-neutral-900 max-md:px-5">
            <div className="flex flex-col flex-1 shrink text-[#D3F7CC] basis-0 min-w-[240px] max-md:max-w-full">
                <div className="text-7xl font-extended max-md:max-w-full max-md:text-4xl max-md:leading-10">Dynamic Fees</div>
                <div className="mt-16 text-2xl tracking-wider leading-9 max-md:mt-10 max-md:max-w-full">
                    Adapting to market conditions: a special model calculating the fee depending on risks, volatility, trading and pool’s
                    volume.
                </div>
            </div>
            <div className="flex overflow-hidden flex-col rounded-xl bg-zinc-300 min-w-[240px] w-[600px] max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4fd041da13e074fab453b5854d81e29db8777aebca297f1ed7ae60107e1bf3b?placeholderIfAbsent=true&apiKey=178a4f741eef4ff885dc743f1ec89e39"
                    className="object-contain w-full aspect-square max-md:max-w-full"
                />
            </div>
        </div>
    );
}
