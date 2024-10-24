import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return;
        const savedTheme = window.localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
        if (typeof window === 'undefined') return;

        window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <div className="flex fixed bottom-4 left-4 rounded-full w-24 h-10 border-0 bg-white dark:bg-dark-background shadow dark:shadow-gray-600 border-black z-50">
            <button
                onClick={toggleTheme}
                className={`rounded-full w-full h-full items-center flex justify-center ${
                    !isDark ? 'bg-primary' : ''
                }`}
            >
                <Sun size={20} />
            </button>
            <button
                onClick={toggleTheme}
                className={`rounded-full w-full h-full items-center flex justify-center ${
                    isDark ? 'bg-primary' : ''
                }`}
            >
                <Moon size={20} />
            </button>
        </div>
    );
};

export default ThemeToggle;
