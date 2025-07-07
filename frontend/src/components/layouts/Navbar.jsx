import React, { useState, useEffect } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import SideMenu from './SideMenu'
import DarkModeToggle from "../../components/DarkModeToggle"

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false)

    // Optional: Close SideMenu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.side-menu') && !e.target.closest('.menu-button')) {
                setOpenSideMenu(false);
            }
        }
        if (openSideMenu) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }

        return () => document.removeEventListener("click", handleOutsideClick);
    }, [openSideMenu]);

    return (
        <div className="flex gap-5 relative py-4 px-7 sticky top-0 z-30 transition-all duration-300 border-b 
            bg-white/80 border-gray-200/50 backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.1)]
            dark:bg-gray-900 dark:border-gray-700 dark:shadow-[0_0_20px_rgba(147,51,234,0.3)]">

            {/* Gradient overlay */}
            <div className="absolute inset-0 opacity-10 transition-opacity duration-300 
                bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-indigo-100/30
                dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20" />

            <div className="flex items-center gap-5 relative z-10 w-full">
                <button
                    className="menu-button block lg:hidden p-2 rounded-lg transition-all duration-200 
                        text-black hover:bg-gray-100/60 hover:shadow-[0_0_10px_rgba(147,51,234,0.2)]
                        dark:text-white dark:hover:bg-gray-800/60 dark:hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                    onClick={() => setOpenSideMenu(!openSideMenu)}
                >
                    {openSideMenu ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
                </button>

                <h2 className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Expense Tracker
                </h2>

                <div className="ml-auto">
                    <DarkModeToggle />
                </div>
            </div>

            {openSideMenu && (
                <div className="side-menu fixed top-[73px] left-0 w-64 h-[calc(100vh-73px)] transition-all duration-300 z-40 
                    bg-white/95 shadow-[0_0_20px_rgba(147,51,234,0.2)] backdrop-blur-md
                    dark:bg-gray-900/95 dark:shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                    <SideMenu activeMenu={activeMenu} />
                </div>
            )}
        </div>
    )
}

export default Navbar
