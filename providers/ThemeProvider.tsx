"use client"

import ThemeContext from "@/context/ThemeContext"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const ThemeProvider = ({children}:{children: React.ReactNode}) => {
    const ThemeFromLocalStorage = 
        typeof localStorage != "undefined" && localStorage.getItem("dark") 
         ? JSON.parse(localStorage.getItem("dark")!) 
          : false

    const [darkMode, setDarkMode] = useState(ThemeFromLocalStorage)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return <></>
    }

    return <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <main className={cn("text-black dark:text-white", darkMode ? "dark" : "")}>
            {children}
        </main>
    </ThemeContext.Provider>
}

export default ThemeProvider;