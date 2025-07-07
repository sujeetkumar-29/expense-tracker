// components/DarkModeToggle.js
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { LuMoon} from 'react-icons/lu';
import { TiStarburst } from "react-icons/ti";

const DarkModeToggle = ({ className = "" }) => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all duration-200 
                bg-gray-100/60 hover:bg-gray-200/60 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]
                dark:bg-gray-800/60 dark:hover:bg-gray-700/60 
                ${className}`}
        >
            <span className="text-lg transition-transform duration-200 hover:scale-110">
                {isDark ? <TiStarburst className="text-white" /> : <LuMoon className="text-black fill-black" />}
            </span>
        </button>
    );
};

export default DarkModeToggle;
