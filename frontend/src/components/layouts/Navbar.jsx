import React, { useState, useEffect, useRef } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import SideMenu from './SideMenu'
import DarkModeToggle from "../../components/DarkModeToggle"

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const ignoreClick = useRef(false)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            // Skip the first click that toggled the menu
            if (ignoreClick.current) {
                ignoreClick.current = false
                return
            }

            if (!e.target.closest('.side-menu') && !e.target.closest('.menu-button')) {
                setOpenSideMenu(false)
            }
        }

        if (openSideMenu) {
            document.addEventListener("click", handleOutsideClick)
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [openSideMenu])

    const handleMenuToggle = () => {
        ignoreClick.current = true
        setOpenSideMenu(prev => !prev)
    }

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="h-16 flex items-center justify-between px-4 lg:px-6 relative transition-all duration-300 border-b 
                bg-white/80 border-gray-200/50 backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.1)]
                dark:bg-gray-900 dark:border-gray-700 dark:shadow-[0_0_20px_rgba(147,51,234,0.3)]">

                {/* Gradient overlay */}
                <div className="absolute inset-0 opacity-10 transition-opacity duration-300 
                    bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-indigo-100/30
                    dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20" />

                {/* Left side - Menu toggle and Logo */}
                <div className="flex items-center gap-2 sm:gap-4 relative z-10">
                    {/* Mobile menu toggle */}
                    <button
                        className="menu-button xl:hidden p-2 rounded-lg transition-all duration-200 
                            text-black hover:bg-gray-100/60 hover:shadow-[0_0_10px_rgba(147,51,234,0.2)]
                            dark:text-white dark:hover:bg-gray-800/60 dark:hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                        onClick={handleMenuToggle}
                    >
                        {openSideMenu ? (
                            <HiOutlineX className="text-xl sm:text-2xl" />
                        ) : (
                            <HiOutlineMenu className="text-xl sm:text-2xl" />
                        )}
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img src="/expenselogo.svg" className="h-6 sm:h-8 dark:bg-black rounded" alt="logo" />
                        <h2 className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent truncate">
                            <span className="hidden sm:inline">Expense Tracker</span>
                            <span className="sm:hidden">ExpTracker</span>
                        </h2>
                    </div>
                </div>

                {/* Right side - Dark mode toggle */}
                <div className="relative z-10">
                    <DarkModeToggle />
                </div>
            </nav>

            {/* Mobile Side Menu Overlay */}
            {openSideMenu && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="lg:hidden fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 backdrop-blur-sm"
                        onClick={() => setOpenSideMenu(false)}
                    />
                    
                    {/* Mobile Side Menu */}
                    <div className={`
                        side-menu lg:hidden fixed top-0 left-0 h-full z-50 transform transition-all duration-300 ease-in-out
                        ${openSideMenu ? 'translate-x-0' : '-translate-x-full'}
                        w-72 sm:w-80 bg-white/98 shadow-2xl backdrop-blur-lg
                        dark:bg-gray-900/98 dark:shadow-emerald-500/20
                    `}>
                        {/* Mobile menu content - no separate header needed */}
                        <div className="h-full overflow-y-auto scrollbar-thin mobile-hide-scrollbar">
                            <SideMenu 
                                activeMenu={activeMenu} 
                                isMobile={true} 
                                onItemClick={() => setOpenSideMenu(false)} 
                            />
                        </div>
                        
                        {/* Close button - floating */}
                        <button
                            onClick={() => setOpenSideMenu(false)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg z-10"
                        >
                            <HiOutlineX className="text-lg text-gray-600 dark:text-gray-300" />
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar