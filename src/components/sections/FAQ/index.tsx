import Button from '@/components/common/Button';
import { useState } from 'react';

export interface FAQItemProps {
    question: string;
    answer?: string;
    isExpanded?: boolean;
}

export interface FAQData {
    question: string;
    answer?: string;
}

const faqData: FAQData[] = [
    {
        question: 'What is TONCO?',
        answer: 'Unlike static pool fees, TONCO adapts fees based on pair volatility, increasing profitability by up to 20%.',
    },
    {
        question: 'What is CLAMM on TONCO?',
        answer: '',
    },
    {
        question: 'What makes trading with TONCO different?',
        answer: '',
    },
    {
        question: 'Is the TONCO DEX live already?',
        answer: '',
    },
    {
        question: 'Does TONCO have a token?',
        answer: '',
    },
    {
        question: 'Who is the TONCO team?',
        answer: '',
    },
];

const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    isExpanded = false,
}) => {
    const [expanded, setExpanded] = useState(isExpanded);

    return (
        <article
            onClick={() => setExpanded(!expanded)}
            className=" cursor-pointer flex flex-wrap gap-10 justify-between items-center px-6 py-3.5 mt-4 w-full bg-[#E8F5F1] rounded-3xl min-h-[72px] max-md:px-5 max-md:max-w-full"
        >
            <h3 className="self-stretch my-auto text-lg font-semibold tracking-tighter leading-none text-primary">
                {question}
            </h3>
            <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_bi_972_1276)">
                    <rect width="44" height="44" rx="22" fill="#3AB62A" />
                    <rect
                        width="44"
                        height="44"
                        rx="22"
                        fill="#F8F8F8"
                        fill-opacity="0.1"
                    />
                    <rect
                        x="0.75"
                        y="0.75"
                        width="42.5"
                        height="42.5"
                        rx="21.25"
                        stroke="url(#paint0_linear_972_1276)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                    />
                    <g opacity="0.8">
                        <path
                            d="M22 13.75V22M22 22V30.25M22 22H13.75M22 22H30.25"
                            stroke="#F8F8F8"
                            stroke-opacity="0.95"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_bi_972_1276"
                        x="-100"
                        y="-100"
                        width="244"
                        height="244"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                            in="BackgroundImageFix"
                            stdDeviation="50"
                        />
                        <feComposite
                            in2="SourceAlpha"
                            operator="in"
                            result="effect1_backgroundBlur_972_1276"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_backgroundBlur_972_1276"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="2" dy="4" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0 0.972549 0 0 0 0.06 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect2_innerShadow_972_1276"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_972_1276"
                        x1="22"
                        y1="-4.99302e-07"
                        x2="41.1409"
                        y2="48.3174"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" stop-opacity="0.4" />
                        <stop
                            offset="0.4"
                            stop-color="white"
                            stop-opacity="0.01"
                        />
                        <stop
                            offset="0.6"
                            stop-color="white"
                            stop-opacity="0.01"
                        />
                        <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0.1"
                        />
                    </linearGradient>
                </defs>
            </svg>

            {expanded && answer && (
                <div
                    id={`answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
                    className="w-full text-lg text-gray-800"
                >
                    {answer}
                </div>
            )}
        </article>
    );
};

export default function FAQ() {
    return (
        <div className="flex flex-col items-center w-full bg-white p-8 md:p-[156px]">
            <h2 className="text-7xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                FAQ
            </h2>
            <section className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isExpanded={index === 0}
                    />
                ))}
            </section>
        </div>
    );
}
