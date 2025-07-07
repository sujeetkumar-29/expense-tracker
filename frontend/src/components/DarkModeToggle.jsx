// components/DarkModeToggle.js
import React from 'react';
import { useDarkMode } from "../context/DarkModeContext"

const DarkModeToggle = ({ className = "" }) => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-200 
                bg-gray-100/60 hover:bg-gray-200/60 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]
                dark:bg-gray-800/60 dark:hover:bg-gray-700/60 dark:hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]
                ${className}`}
        >
            <span className="text-lg transition-transform duration-200 hover:scale-110">
                {isDark ? '☀️' : '🌙'}
            </span>
        </button>
    );
};

export default DarkModeToggle;