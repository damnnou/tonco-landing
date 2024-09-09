/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FeatureItemProps {
    title: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title }) => (
    <li
        id="feature-item"
        className="flex flex-wrap gap-2.5 items-center py-3 pr-3 pl-6 w-full rounded-3xl bg-[#EFF7F5] max-md:pl-5 max-md:max-w-full animate-text-fly-in"
    >
        <span className="self-stretch my-auto text-2xl tracking-wider leading-none">—</span>
        <h3 className="flex-1 shrink self-stretch my-auto text-4xl font-extraboldExt basis-0 leading-[80px] max-md:max-w-full">{title}</h3>
    </li>
);

export default FeatureItem;
