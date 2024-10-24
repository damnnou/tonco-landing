import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';
import { ChevronUp, Moon, Sun } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
    return (
        <div className="flex flex-col items-center max-w-[1440px] mx-auto">
            <ThemeToggle />
            <div className="flex fixed bottom-4 right-4 rounded-full w-fit px-4 h-10 border-0 shadow bg-white dark:bg-dark-background dark:shadow-gray-600 z-50">
                <div className="rounded-full gap-2 w-full h-full items-center flex justify-center">
                    ENG
                    <ChevronUp size={20} />
                </div>
            </div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
