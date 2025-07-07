// contexts/DarkModeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

export const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    // Check for dark mode preference on mount
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        let isDarkMode;

        if (storedDarkMode !== null) {
            // User has a stored preference - use it
            isDarkMode = storedDarkMode === 'true';
        } else {
            // No stored preference - check system preference
            isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            // Store the initial preference based on system
            localStorage.setItem('darkMode', isDarkMode.toString());
        }

        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
            <div className={isDark ? 'dark' : ''}>
                {children}
            </div>
        </DarkModeContext.Provider>
    );
};