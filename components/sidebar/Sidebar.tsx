"use client"

import { DashboardSidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';

import { FrameIcon } from '@radix-ui/react-icons'
import { FiChevronRight } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";

import { motion } from "framer-motion"
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const [showSideBar, setShowSidebar] = useState(false)
  const [subLink, setSubLink] = useState<string | null>(null)

  const pathname = usePathname()

  if(pathname.includes("new-organization")){
    return null
  }

  const variants = {
    initial: {
      width: "80px",
    },
    animate: {
      width: "320px",
    },
  }

  return (
      <motion.aside 
        variants={variants} 
        initial="initial" 
        animate={showSideBar ? "animate" : "initial"} 
        className={cn('border-r-2 border-color bg-foreground dark:bg-background transition')}
      >
        <div className={cn('h-16 border-b-2 border-color px-4 flex items-center justify-between font-semibold text-xl', !showSideBar && "flex flex-col items-center justify-center")}>
          <span className={cn(!showSideBar && "hidden")}>Tonnio</span>
          <button 
           onClick={()=> setShowSidebar(prev=>!prev)} className='font-semibold transition hover:bg-muted dark:hover:bg-foreground h-8 aspect-square grid place-items-center rounded-md'>
            <BsLayoutSidebar className='w-4 h-4'/>
          </button>
        </div>
        <div className={cn('h-16 border-b-2 border-color flex p-4 items-center', !showSideBar && "justify-center")}>
          <div className='bg-primary text-white rounded-md grid place-items-center w-8 aspect-square'>
            <FrameIcon className='w-3 h-3' />
          </div>
          <div className={cn("ml-2", !showSideBar && "hidden")}>
            <h3 className='text-xs text-muted-foreground'>Your Organisation</h3>
            <h2 className='font-semibold'>Cookie Inc.</h2>
          </div>
        </div>
        {/* Links */}
        <nav className={cn('flex flex-col p-4 gap-2 text-muted-foreground', !showSideBar && "items-center")}>
          {
            DashboardSidebarLinks.map((link)=>{
              const Icon = link.icon;
              const IconActive = link.iconActive;

              const isActive = pathname.includes(link.href);

              return (
                  <div className='flex flex-col w-full' key={link.label}>
                    <Link 
                      {...(link.subLinks != null && {onClick: ()=>setSubLink(prev => prev === link.href ? null : link.href)})}
                      href={link.href}
                      className={cn('flex gap-2 items-center p-2 px-2 rounded-sm hover:bg-muted dark:hover:bg-foreground transition w-full', 
                        isActive && "font-semibold bg-muted dark:bg-foreground text-primary",
                        showSideBar ? "justify-between" : "justify-center"
                      )}
                    >
                      <div className={cn("flex gap-2 items-center", !showSideBar && "justify-center")}>
                        <span className=''>{isActive ? <IconActive className='text-primary' /> : <Icon />}</span>
                        <p className={cn(!showSideBar && "hidden")}>{link.label}</p>
                      </div>
                      {/* SUBLINKS */}
                      {
                        link.subLinks != null && 
                        <button 
                          className={cn("transition", 
                            subLink == link.href ? "rotate-90" : "",
                            !showSideBar && "hidden"
                          )}
                        >
                          <FiChevronRight />
                        </button>
                      }
                    </Link>
                    {
                      link.subLinks != null && (
                        <div className={cn("border-l px-2 my-2 flex flex-col", 
                          subLink == link.href ? "block" : "hidden", 
                          showSideBar ? "ml-4" :"hidden",
                        )}
                        > 
                          {link.subLinks.map((sublink)=>{
                            return (
                              <Link className='py-1.5 px-2 text-sm rounded-sm hover:bg-muted dark:hover:bg-foreground transition block' key={sublink.label} href={sublink.href}>{sublink.label}</Link>
                          )
                          })}
                        </div>
                      )
                    }
                  </div>
              )
            })
          }
        </nav>
      </motion.aside>
  )
}
