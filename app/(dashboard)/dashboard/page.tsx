import ThemeToggler from "@/components/ThemeToggler"
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSettings3Line } from "react-icons/ri";
import { IoChevronDownSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div className=''>
      <header className="h-16 border-b-2 border-color px-4 text-muted-foreground">
        <div className="container h-full flex gap-2 items-center justify-between">
          <div className="bg-muted dark:bg-foreground border-2 border-color dark:border-transparent h-[60%] hidden md:w-4/5 lg:w-3/5 xl:w-2/5 md:flex items-center rounded-lg px-4">
            <LuSearch className="w-4 h-4 mr-3 opacity-55" />
            <input placeholder="Search" className="h-full w-full bg-transparent outline-none placeholder:text-sm darK:placeholder:text-muted dark:placeholder:opacity-45" type="search" />
          </div>
          <div className="h-full w-full flex items-center justify-end">
            <div className="flex items-center gap-2 h-full">
              <div className="relative">
                <button className="w-7 h-7 grid place-items-center rounded-md border-2 border-color dark:border-transparent dark:bg-foreground"><IoMdNotificationsOutline /></button>
                <div className="w-1.5 aspect-square rounded-full bg-red-600 absolute top-1 right-1.5" />
              </div>
              <button className="w-7 h-7 grid place-items-center rounded-md border-2 border-color dark:border-transparent dark:bg-foreground"><RiSettings3Line /></button>
            </div>
            <div className="h-[60%] w-[1.5px] bg-muted dark:bg-foreground mx-2" />
            <div className="flex items-center gap-2 mr-3">
              <Image className="w-8 aspect-square rounded-full" src="/profile.jpg" width={200} height={200} alt="Profile" />
              <div className="hidden sm:block">
                <h2 className="font-semibold text-sm text-black dark:text-white">Kamado Tangiro</h2>
                <p className="text-xs">Admin</p>
              </div>
              <button><IoChevronDownSharp className="w-4 h-4" /></button>
            </div>
            <ThemeToggler />
          </div>
          
        </div>
      </header>
      <div></div>
    </div>
  )
}
