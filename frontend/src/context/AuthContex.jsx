import {createContext, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null
    })

    const [token, setToken] = useState(() => {
        return localStorage.getItem("token") || null;
    })

    const login = (userData, token) => {
        setUser(userData);
        setToken(token)
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token)
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }

    const contextValue = {
        user, 
        token,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
