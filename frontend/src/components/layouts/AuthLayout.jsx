// components/AuthLayout.js
import React from 'react'
import CARD_2 from '../../assets/images/card2.png'
import { LuTrendingUpDown } from 'react-icons/lu';
import DarkModeToggle from "../../components/DarkModeToggle"

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        Expense Tracker
                    </h2>
                    <DarkModeToggle />
                </div>
                {children}
            </div>
            
            <div className="hidden md:block w-[40vw] h-screen overflow-hidden p-8 relative transition-all duration-500 
                bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50
                dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
                
                {/* Space Glow Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Animated gradient orbs with glow */}
                    <div className="w-48 h-48 rounded-full absolute -top-7 -left-5 animate-pulse transition-all duration-1000 
                        bg-gradient-to-r from-purple-400 to-pink-400 shadow-[0_0_60px_rgba(147,51,234,0.4)]
                        dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 dark:shadow-[0_0_100px_rgba(147,51,234,0.7)]" />
                    
                    <div className="w-48 h-48 rounded-full border-[20px] absolute top-[30%] -right-10 animate-pulse transition-all duration-1000 delay-300 
                        border-fuchsia-400 shadow-[0_0_80px_rgba(217,70,239,0.3)]
                        dark:border-fuchsia-500 dark:shadow-[0_0_120px_rgba(217,70,239,0.6)]" />
                    
                    <div className="w-48 h-48 rounded-full absolute -bottom-7 -left-5 animate-pulse transition-all duration-1000 delay-500 
                        bg-gradient-to-r from-violet-400 to-indigo-400 shadow-[0_0_60px_rgba(124,58,237,0.4)]
                        dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 dark:shadow-[0_0_100px_rgba(124,58,237,0.7)]" />
                    
                    {/* Additional space glow particles */}
                    <div className="w-4 h-4 rounded-full absolute top-20 right-20 animate-ping 
                        bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.6)]
                        dark:bg-cyan-400 dark:shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                    <div className="w-3 h-3 rounded-full absolute top-[60%] right-[20%] animate-ping delay-1000 
                        bg-pink-300 shadow-[0_0_10px_rgba(244,114,182,0.6)]
                        dark:bg-pink-400 dark:shadow-[0_0_15px_rgba(244,114,182,0.8)]" />
                    <div className="w-2 h-2 rounded-full absolute bottom-[30%] right-[30%] animate-ping delay-700 
                        bg-yellow-300 shadow-[0_0_8px_rgba(250,204,21,0.6)]
                        dark:bg-yellow-400 dark:shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                </div>

                <div className="grid grid-cols-1 z-20 relative">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track your Income & Expenses"
                        value="430,000"
                    />
                </div>

                <img 
                    src={CARD_2} 
                    className="w-64 lg:w-[90%] absolute bottom-10 transition-all duration-500 
                        shadow-lg shadow-blue-400/15
                        dark:shadow-2xl dark:shadow-purple-500/30 dark:drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                    alt="Card illustration"
                />
            </div>
        </div>
    );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value }) => {
    return (
        <div className="flex gap-6 p-4 rounded-xl shadow-md border z-10 mb-6 backdrop-blur-sm transition-all duration-300 
            bg-white/80 shadow-purple-400/10 border-gray-200/50 text-gray-900
            dark:bg-gray-800/70 dark:shadow-purple-500/20 dark:border-gray-700/50 dark:text-white">
            <div className="w-12 h-12 flex items-center justify-center text-[26px] text-white rounded-full transition-all duration-300 
                bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(147,51,234,0.4)]
                dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 dark:shadow-[0_0_20px_rgba(147,51,234,0.6)]">
                {icon}
            </div>
            <div>
                <h6 className="text-xs mb-1 text-gray-500 dark:text-gray-300">{label}</h6>
                <span className="text-[20px] font-semibold text-gray-900 dark:text-white">${value}</span>
            </div>
        </div>
    );
}