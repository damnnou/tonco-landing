import { Minus, Plus } from 'lucide-react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import peaHero from '@/assets/hero-char.png';
import Button from '@/components/common/Button';
import WaitlistModal from '@/components/WaitlistModal';

export interface FAQItemProps {
    question: string;
    answer?: ReactNode;
    isExpanded?: boolean;
}

export interface FAQData {
    question: string;
    answer?: ReactNode;
}

const faqData: FAQData[] = [
    {
        question: 'What is TONCO?',
        answer: (
            <p>
                TONCO is the first DEX on TON Blockchain to implement
                concentrated liquidity, designed to optimize every move for
                maximum impact.{' '}
                <a href="#" className="underline text-primary">
                    Learn more about TONCO
                </a>
            </p>
        ),
    },
    {
        question: 'What is CLAMM on TONCO?',
        answer: (
            <p>
                CLAMM stands for Concentrated Liquidity Automated Market Maker,
                allowing liquidity providers to concentrate liquidity in
                specific price ranges. This maximizes capital efficiency and
                improves yield for LPs.{' '}
                <a href="#" className="underline text-primary">
                    Read more about CLAMM
                </a>
            </p>
        ),
    },
    {
        question: 'What makes trading with TONCO different?',
        answer: (
            <p>
                TONCO delivers higher yields for liquidity providers and lower
                slippage for traders by concentrating liquidity in active price
                ranges. Combined with features like dynamic fees, which adjust
                based on market volatility, and built-in farming, TONCO
                maximizes profitability and trading efficiency on TON
                Blockchain.
            </p>
        ),
    },
    {
        question: 'Is the TONCO DEX live already?',
        answer: (
            <div className="flex flex-col gap-4">
                The TONCO Testnet is launching soon. Get early access by joining
                our waitlist.{' '}
                <WaitlistModal>
                    <Button variant="primary" className="w-fit">
                        Join waitlist
                    </Button>
                </WaitlistModal>
            </div>
        ),
    },
    {
        question: 'Does TONCO have a token?',
        answer: 'No.',
    },
    {
        question: 'Who is the TONCO team?',
        answer: (
            <p>
                TONCO developed by Algebra team: time-tested infrastructure
                developers with a strong track record and numerous partnerships
                across EVM chains.{' '}
                <a href="#" className="underline text-primary">
                    Learn more about us
                </a>
            </p>
        ),
    },
];

const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    isExpanded = false,
}) => {
    const [expanded, setExpanded] = useState(isExpanded);
    const [maxHeight, setMaxHeight] = useState<string | undefined>(undefined);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(
                expanded ? `${contentRef.current.scrollHeight}px` : '0'
            );
        }
    }, [expanded]);

    return (
        <article
            onClick={() => !expanded && setExpanded(!expanded)}
            className={`cursor-pointer flex flex-col gap-4 bg-[#E8F5F1] rounded-3xl max-md:px-5 p-5 transition-all duration-200 ${
                !expanded ? 'pb-1' : ''
            }`}
        >
            <div
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-4 w-full justify-between"
            >
                <h3 className="self-stretch my-auto max-md:text-md font-semibold tracking-tighter leading-none text-primary max-w-3/4">
                    {question}
                </h3>
                <div className="min-w-11 min-h-11 max-md:min-w-8 max-md:min-h-8 bg-primary rounded-full flex items-center justify-center text-[#F8F8F8]">
                    {expanded ? (
                        <Minus className="max-md:size-4 animate-rotate-in" />
                    ) : (
                        <Plus className="max-md:size-4 animate-rotate-out" />
                    )}
                </div>
            </div>

            <div
                ref={contentRef}
                style={{
                    maxHeight,
                    transition: 'max-height 0.2s ease-in-out',
                    overflow: 'hidden',
                }}
            >
                <div className="w-full md:text-lg text-gray-800 cursor-auto text-md">
                    {answer}
                </div>
            </div>
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
