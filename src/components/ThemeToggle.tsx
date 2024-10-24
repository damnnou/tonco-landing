import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // Импортируем иконки

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark', !isDark);
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
