import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import peaHero from '@/assets/hero-char.png';

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
            className="cursor-pointer flex flex-col bg-[#E8F5F1] rounded-3xl min-h-fit max-md:px-5 p-5 transition-all duration-200"
        >
            <div className="flex items-center gap-4 w-full justify-between">
                <h3 className="self-stretch my-auto max-md:text-md font-semibold tracking-tighter leading-none text-primary max-w-3/4">
                    {question}
                </h3>
                <div className="min-w-11 min-h-11 max-md:min-w-8 max-md:min-h-8 bg-primary rounded-full flex items-center justify-center text-[#F8F8F8]">
                    {expanded ? (
                        <Minus className="max-md:size-4" />
                    ) : (
                        <Plus className="max-md:size-4" />
                    )}
                </div>
            </div>

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
        <div className="flex flex-col items-center w-full bg-white p-4 md:p-[156px] md:py-[114px]">
            <img
                className="w-[210px] mb-8 max-md:w-[180px]"
                src={peaHero.src}
            />
            <h2 className="text-7xl font-semibold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                FAQ
            </h2>
            <section className="flex flex-col mt-16 gap-4 w-full max-md:mt-10 max-md:max-w-full">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isExpanded={false}
                    />
                ))}
            </section>
        </div>
    );
}
