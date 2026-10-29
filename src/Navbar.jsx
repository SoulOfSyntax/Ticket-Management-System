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
            <p className="font-semibold text-gray-400">Workspace {">"} Tickets</p>
        </div>
        <div>
            <div className="flex gap-3 text-xl">
                <span className="border text-md border-gray-500/30 rounded-full p-0.5"><CiSearch /></span>
                <span className="border border-gray-500/30 rounded-full p-0.5"><IoIosNotificationsOutline /></span>
                <span className="border text-md border-gray-500/30 rounded-full p-1"><LuMessageSquareText /></span>
                <span className="border-l-1 text-2xl  pl-3 border-gray-500/30  "><CgProfile /></span>

            </div>
        </div>
    </div>
  )
}

export default Navbar