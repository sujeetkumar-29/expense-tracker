import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaDollarSign } from 'react-icons/fa';
import DarkModeToggle from "../../components/DarkModeToggle"



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // const { isDark, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
            }`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg">
                            <FaDollarSign className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                            Expense Tracker
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('screenshots')}
                            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Screenshots
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Contact
                        </button>
                        <DarkModeToggle />

                        <div className="flex space-x-3">
                            <button className="px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                                Login
                            </button>
                            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105">
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <DarkModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2 py-4">
                        <div className="flex flex-col space-y-3 px-4">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('screenshots')}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
                            >
                                Screenshots
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
                            >
                                Contact
                            </button>
                            <hr className="border-gray-200 dark:border-gray-700" />
                            <button className="text-left text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors py-2">
                                Login
                            </button>
                            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
