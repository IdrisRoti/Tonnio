"use client"

import React, { useContext } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeContext from '@/context/ThemeContext'
import { cn } from '@/lib/utils';
import CustomCard from './custom-components/custom-card';

import { GrMenu } from "react-icons/gr";

export default function ThemeToggler() {
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    const handleSetDarkMode = () => {
        setDarkMode(true)
        localStorage.setItem("dark", "true")
    }

    const handleSetLightMode = () => {
        setDarkMode(false)
        localStorage.removeItem("dark")
    }

  return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className='outline-none'>
            <CustomCard className='p-2 rounded-md'>
              <GrMenu className=' ' />
            </CustomCard>
        </DropdownMenuTrigger>
          <DropdownMenuContent className={cn('w-60 border shadow', 
            darkMode ? "bg-[#202020] border-[#2f2f2f]" : "bg-foreground"
          )}>
              <DropdownMenuLabel className={cn("font-normal", darkMode && "text-background")}>Theme</DropdownMenuLabel>
              <DropdownMenuItem className={cn(darkMode ? "focus:bg-[#2f2f2f] focus:text-background" : "focus:bg-[#ebeced]")} asChild>
                <button
                  className={cn('w-full text-left cursor-pointer text-sm flex items-center',darkMode && "text-background")} 
                  onClick={handleSetLightMode}
                >
                  <div className={cn('size-1.5 bg-[#101010] dark:bg-[#f1f5f9] rounded-full mr-2', darkMode && "opacity-0")} />
                  <span className=''>
                    Light
                  </span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem className={cn(darkMode ? "focus:bg-[#2f2f2f] focus:text-background" : "focus:bg-[#ebeced]")} asChild>
                <button
                  className={cn('w-full text-left cursor-pointer text-sm flex items-center',darkMode && "text-background")} 
                  onClick={handleSetDarkMode}
                >
                  <div className={cn('size-1.5 bg-[#101010] dark:bg-background rounded-full mr-2 bg-foreground', !darkMode && "opacity-0")} />
                  <span className=''>
                    Dark
                  </span>
                </button>
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}
