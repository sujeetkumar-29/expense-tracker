import React, { useContext } from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'
import { UserContext } from '../../context/userContext'
import { useNavigate } from "react-router-dom"
import CharAvtar from '../Cards/CharAvtar'

const SideMenu = ({ activeMenu, isMobile = false, onItemClick }) => {
    const { user, clearUser } = useContext(UserContext)
    const navigate = useNavigate();

    const handleClick = (route) => {
        // Close mobile menu if it's mobile
        if (isMobile && onItemClick) {
            onItemClick();
        }
        
        if (route === "logout") {
            handleLogout();
            return;
        }
        navigate(route);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userInfo');
        clearUser();
        navigate("/");
    };

    return (
        <div className={`
            ${isMobile 
                ? 'w-full h-full bg-white dark:bg-gray-900' 
                : 'w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200/50 dark:border-gray-700 sticky top-16'
            } 
            overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600
        `}>
            <div className="p-5">
                {/* User Profile Section */}
                <div className="flex flex-col items-center justify-center gap-3 mb-8 pb-6 border-b border-gray-200/50 dark:border-gray-700">
                    {user?.profileImageUrl ? (
                        <img
                            src={user?.profileImageUrl}
                            alt="Profile Image"
                            className="w-16 h-16 bg-slate-400 rounded-full object-cover ring-2 ring-primary/20"
                        />
                    ) : (
                        <CharAvtar
                            fullName={user?.fullName}
                            width="w-16"
                            height="h-16"
                            style="text-lg"
                        />
                    )}
                    <div className="text-center">
                        <h5 className="text-gray-900 dark:text-gray-100 font-semibold text-sm leading-5 truncate max-w-40">
                            {user?.fullName || "User"}
                        </h5>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            Welcome back!
                        </p>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1">
                    {SIDE_MENU_DATA.map((item, index) => {
                        const isActive = activeMenu === item.label;
                        return (
                            <button
                                key={`menu_${index}`}
                                className={`
                                    w-full flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-xl mb-1 
                                    transition-all duration-200 group relative overflow-hidden
                                    ${isActive
                                        ? 'text-white bg-gradient-to-r from-emerald-500 to-blue-500 shadow-lg shadow-emerald-500/25 transform scale-[1.02]'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }
                                `}
                                onClick={() => handleClick(item.path)}
                            >
                                {/* Background animation */}
                                <div className={`
                                    absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 
                                    group-hover:opacity-10 transition-opacity duration-200
                                    ${isActive ? 'opacity-100' : ''}
                                `} />
                                
                                {/* Icon */}
                                <item.icon className={`
                                    text-lg flex-shrink-0 transition-transform duration-200
                                    ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}
                                    ${isActive ? 'transform scale-110' : 'group-hover:transform group-hover:scale-110'}
                                `} />
                                
                                {/* Label */}
                                <span className="relative z-10 truncate">
                                    {item.label}
                                </span>

                                {/* Active indicator */}
                                {isActive && (
                                    <div className="absolute right-2 w-2 h-2 bg-white rounded-full shadow-sm" />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Footer section for mobile */}
                {isMobile && (
                    <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            Expense Tracker v1.0
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideMenu;