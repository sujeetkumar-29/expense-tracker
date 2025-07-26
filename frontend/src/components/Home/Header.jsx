import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaDollarSign } from 'react-icons/fa';
import DarkModeToggle from "../../components/DarkModeToggle";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="">
              <img src="/expenselogo.svg" className="h-10 dark:bg-black" alt="logo" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent cursor-pointer">
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
              <Link to="/login">
                <button className="cursor-pointer px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className=" cursor-pointer px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6 dark:text-white" /> : <FaBars className="h-6 w-6 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 py-4 transition-all duration-300">
            <div className="flex flex-col space-y-3 px-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('screenshots')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 py-2"
              >
                Screenshots
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 py-2"
              >
                Contact
              </button>
              <hr className="border-gray-200 dark:border-gray-700" />
              <Link to="/login">
                <button className="cursor-pointer text-left text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 py-2">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="cursor-pointer w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
