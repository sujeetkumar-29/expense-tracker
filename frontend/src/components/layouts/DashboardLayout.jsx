import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Navbar from './Navbar'
import SideMenu from './SideMenu'
import { useResponsive } from '../../hooks/useResponsive'

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext)
    const { isMobile, isTablet, isDesktop } = useResponsive()
    
    return (
        <div className="h-screen flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
            {/* Fixed Navbar */}
            <div className="flex-shrink-0 z-30">
                <Navbar activeMenu={activeMenu} />
            </div>
            
            {user && (
                <div className="flex flex-1 overflow-hidden">
                    {/* Fixed Sidebar - Only visible on extra large screens (1280px+) */}
                    {isDesktop && (
                        <div className="hidden xl:flex xl:flex-shrink-0">
                            <div className="w-64">
                                <SideMenu activeMenu={activeMenu} />
                            </div>
                        </div>
                    )}
                    
                    {/* Scrollable Main Content */}
                    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 scrollbar-thin mobile-hide-scrollbar mobile-scroll-smooth">
                        {/* Responsive padding based on screen size */}
                        <div className={`
                            ${isMobile 
                                ? 'p-3' 
                                : isTablet 
                                    ? 'p-4 sm:p-6' 
                                    : 'p-6 lg:p-8'
                            }
                            transition-all duration-300
                        `}>
                            {/* Max width container with responsive sizing */}
                            <div className={`
                                mx-auto transition-all duration-300
                                ${isMobile 
                                    ? 'max-w-full' 
                                    : isTablet 
                                        ? 'max-w-6xl' 
                                        : 'max-w-7xl'
                                }
                            `}>
                                {/* Content wrapper with responsive spacing */}
                                <div className="min-h-full">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Loading state for when user is not loaded */}
            {!user && (
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout