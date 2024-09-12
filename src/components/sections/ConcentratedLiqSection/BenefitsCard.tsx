interface BenefitsCardProps {
    title: string;
    desc: string;
    img: string;
    color: "green" | "white";
}

export default function BenefitsCard({ title, desc, img, color }: BenefitsCardProps) {
    return (
        <div
            id={`benefits-card-${color}`}
            className={
                "flex-1 shrink p-8 rounded-xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full" +
                (color === "green" ? " bg-emerald-500 text-white" : " bg-white text-black")
            }
        >
            <div className="flex flex-col gap-8 justify-between h-full" id={`benefits-card-${color}-inner`}>
                <div className="flex flex-col w-full gap-8 max-md:max-w-full">
                    <div className="self-center text-4xl font-extended text-center max-md:max-w-full">{title}</div>
                    <div className="text-2xl leading-9 max-md:max-w-full">{desc}</div>
                </div>
                <img className="w-full hover:scale-[102%] transition-all duration-300" alt={title} src={img} />
            </div>
        </div>
    );
}
