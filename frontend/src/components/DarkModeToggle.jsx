import React from 'react'
import { useDarkMode } from '../context/ThemeContext.jsx'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


const DarkModeToggler = () => {
    const {darkMode,setDarkMode}=useDarkMode()
    return (
        <button onClick={()=>setDarkMode(!darkMode)} className="dark:text-white cursor-pointer">
            {darkMode ? <FaSun /> : <FaMoon className="text-black" />}
        </button>
    )
}
export default DarkModeToggler