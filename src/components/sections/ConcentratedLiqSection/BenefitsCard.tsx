import Image, { StaticImageData } from "next/image";

interface BenefitsCardProps {
    title: string;
    desc: string;
    img: StaticImageData;
    color: "green" | "white";
}

export default function BenefitsCard({ title, desc, img, color }: BenefitsCardProps) {
    return (
        <div
            id={`benefits-card-${color}`}
            className={
                "flex flex-col flex-1 gap-8 shrink justify-between p-8 rounded-xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full" +
                (color === "green" ? " bg-emerald-500 text-white" : " bg-white text-black")
            }
        >
            <div className="flex flex-col w-full gap-8 max-md:max-w-full">
                <div className="self-center text-4xl font-extended text-center max-md:max-w-full">{title}</div>
                <div className="text-2xl leading-9 max-md:max-w-full">{desc}</div>
            </div>
            <Image className="w-full hover:scale-[102%] transition-all duration-300" alt={title} src={img} quality={100} />
        </div>
    );
}
