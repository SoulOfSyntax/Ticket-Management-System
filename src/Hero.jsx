import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="m-4">

        <div classsName="flex flex-col ">
            <div className="flex justify-between mb-4">
                <h1 className="text-4xl ">All Tickets</h1>
            </div>
            <div className="flex justify-between ">
                <div className="flex gap-4 bg-gray-200  p-2 rounded-lg ">
                    <ul className="flex  gap-3">
                        <li className="cursor-pointer p-1 px-3 rounded-lg hover:bg-black/60 hover:text-white">All</li>
                        <li className="cursor-pointer p-1 px-3 rounded-lg hover:bg-black/60 hover:text-white">Pending</li>
                        <li className="cursor-pointer p-1 px-3 rounded-lg hover:bg-black/60 hover:text-white">Open</li>
                        <li className="cursor-pointer p-1 px-3 rounded-lg hover:bg-black/60 hover:text-white">Resolved</li>
                        <li className="cursor-pointer p-1 px-3 rounded-lg hover:bg-black/60 hover:text-white">Closed</li>
                    </ul>
                </div>
                <div className="flex  gap-6">
                    
                    <div className="border flex items-center cursor-pointer hover:bg-gray-900 hover:text-white  flex gap-2 h-[40px] border-gray-200 border-2 p-2 rounded-lg"><IoSettingsOutline /><h2>Views</h2></div>
                    <div className="border items-center cursor-pointer hover:bg-gray-900 hover:text-white flex gap-2 h-[40px] border-gray-200 border-2 p-2 rounded-lg"><HiArrowsUpDown /><h2>Priority</h2></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero