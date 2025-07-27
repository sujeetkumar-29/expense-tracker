import React from 'react'
import CARD_2 from '../../assets/images/card2.png'
import CARD_3 from '../../assets/images/card3.png'
import { LuTrendingUpDown } from 'react-icons/lu';
import DarkModeToggle from "../../components/DarkModeToggle"
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex justify-between items-center mb-6">
                    <Link to="/">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                            Expense Tracker
                        </h2>
                    </Link>
                    <DarkModeToggle />
                </div>
                {children}
            </div>

            <div className="hidden md:block w-[40vw] h-screen overflow-hidden p-8 relative transition-all duration-500 
                bg-gradient-to-br from-emerald-50 via-blue-50 to-blue-100
                dark:bg-gradient-to-br dark:from-gray-900 dark:via-emerald-900 dark:to-blue-900">

                <div className="grid grid-cols-1 z-20 relative">
                    <StatsInfoCard
                        icon={<LuTrendingUpDown />}
                        label="Track your Income & Expenses"
                        value="4,30,000"
                    />
                </div>

                <img
                    src={CARD_3}
                    className="w-64 lg:w-[90%] absolute  transition-all duration-500 
                        shadow-lg shadow-blue-400/15
                        dark:shadow-2xl dark:shadow-emerald-500/30 dark:drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                    alt="Card illustration"
                />
                <img
                    src={CARD_2}
                    className="w-64 lg:w-[90%] absolute bottom-10 transition-all duration-500 
                        shadow-lg shadow-blue-400/15
                        dark:shadow-2xl dark:shadow-emerald-500/30 dark:drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]"
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
            bg-white/80 shadow-emerald-400/10 border-gray-200/50 text-gray-900
            dark:bg-gray-800/70 dark:shadow-emerald-500/20 dark:border-gray-700/50 dark:text-white">
            <div className="w-12 h-12 flex items-center justify-center text-[26px] text-white rounded-full transition-all duration-300 
                bg-gradient-to-r from-emerald-500 to-blue-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]
                dark:bg-gradient-to-r dark:from-emerald-600 dark:to-blue-600 dark:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                {icon}
            </div>
            <div>
                <h6 className="text-xs mb-1 text-gray-500 dark:text-gray-300">{label}</h6>
                <span className="text-[20px] font-semibold text-gray-900 dark:text-white">₹{value}</span>
            </div>
        </div>
    );
}
