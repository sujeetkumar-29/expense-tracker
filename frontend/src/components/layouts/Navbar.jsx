// components/Navbar.js
import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import SideMenu from './SideMenu'
import DarkModeToggle from "../../components/DarkModeToggle"

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false)

    return (
        <div className="flex gap-5 relative py-4 px-7 sticky top-0 z-30 transition-all duration-300 border-b 
            bg-white/80 border-gray-200/50 backdrop-blur-md shadow-[0_0_15px_rgba(147,51,234,0.1)]
            dark:bg-gray-900/80 dark:border-gray-700/50 dark:backdrop-blur-md dark:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            
            {/* Gradient background overlay */}
            <div className="absolute inset-0 opacity-10 transition-opacity duration-300 
                bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-indigo-100/30
                dark:bg-gradient-to-r dark:from-purple-900/20 dark:via-pink-900/20 dark:to-indigo-900/20" />
            
            {/* Subtle glow particles */}
            <div className="absolute top-2 right-20 w-1 h-1 rounded-full animate-ping 
                bg-purple-300 shadow-[0_0_8px_rgba(147,51,234,0.6)]
                dark:bg-purple-400 dark:shadow-[0_0_10px_rgba(147,51,234,0.8)]" />
            <div className="absolute bottom-2 left-32 w-1 h-1 rounded-full animate-ping delay-500 
                bg-pink-300 shadow-[0_0_8px_rgba(244,114,182,0.6)]
                dark:bg-pink-400 dark:shadow-[0_0_10px_rgba(244,114,182,0.8)]" />
            
            <div className="flex items-center gap-5 relative z-10 w-full">
                <button 
                    className="block lg:hidden p-2 rounded-lg transition-all duration-200 
                        text-black hover:bg-gray-100/60 hover:shadow-[0_0_10px_rgba(147,51,234,0.2)]
                        dark:text-white dark:hover:bg-gray-800/60 dark:hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                    onClick={() => { setOpenSideMenu(!openSideMenu) }}
                >
                    {openSideMenu ? (
                        <HiOutlineX className="text-2xl" />
                    ) : (
                        <HiOutlineMenu className="text-2xl" />
                    )}
                </button>
                
                <h2 className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Expense Tracker
                </h2>
                
                {/* Dark mode toggle button */}
                <div className="ml-auto">
                    <DarkModeToggle />
                </div>
            </div>
            
            {openSideMenu && (
                <div className="fixed top-[73px] -ml-4 transition-all duration-300 z-40 
                    bg-white/95 shadow-[0_0_20px_rgba(147,51,234,0.2)] backdrop-blur-md
                    dark:bg-gray-900/95 dark:shadow-[0_0_30px_rgba(147,51,234,0.4)] dark:backdrop-blur-md">
                    <SideMenu activeMenu={activeMenu} />
                </div>
            )}
        </div>
    )
}

export default Navbar