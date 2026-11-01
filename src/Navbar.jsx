import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BsLayoutSidebarReverse } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 pt-2">
        <div className="flex items-center  gap-2  ">
            <BsLayoutSidebarReverse className="font-bold"/>
            <p className="font-semibold text-white">Workspace {">"} Tickets</p>
        </div>
        <div>
            <div className="flex gap-3 text-xl">
                <span className="border cursor-pointer hover:bg-gray-300 hover:text-black text-md border-gray-500/30 rounded-full p-0.5 text-white"><CiSearch /></span>
                <span className="border cursor-pointer hover:bg-gray-300 hover:text-black border-gray-500/30 rounded-full p-0.5 text-white"><IoIosNotificationsOutline /></span>
                <span className="border cursor-pointer hover:bg-gray-300 hover:text-black text-md border-gray-500/30 rounded-full p-1 text-white"><LuMessageSquareText /></span>
                <span className="border-l-1 transition-all duration-300 hover:scale-110 cursor-pointer hover:text-green-700 text-2xl  pl-3 border-gray-500/30 text-white "><CgProfile /></span>

            </div>
        </div>
    </div>
  )
}

export default Navbar