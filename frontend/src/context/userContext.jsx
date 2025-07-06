import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // Initialize user state by checking localStorage
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Function to update user data
    const updateUser = (userData) => {
        setUser(userData);
        // Save to localStorage when updating
        localStorage.setItem('user', JSON.stringify(userData));
    }

    // Function to clear user data (e.g., on logout)
    const clearUser = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken'); // Clear token too
    };

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser,
            }}>
            {children}
        </UserContext.Provider >
    );
}
export default UserProvider;