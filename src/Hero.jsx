import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import { FcHighPriority } from "react-icons/fc";


const Hero = () => {
  return (
    <div className="m-4">
        <div className ="flex justify-between items-center">
            <div className="flex justify-between mb-4">
                <h1 className="text-4xl font-bold">Tickets</h1>
            </div>
            <div>
                <span className="border border-gray-300 p-1 items-center text-sm bg-purple-700 rounded-lg font-bold">+ New Ticket</span>
            </div>
            
        </div>
        <div classsName="flex flex-col ">
            
            <div className="flex justify-between ">
                <div className="bg-gray-200 rounded-lg p-3 w-full m-2">
                    <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><MdOutlineDoNotDisturbOnTotalSilence />TOTAL TICKETS</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="text-3xl font-bold">20</h3>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                    <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><FaRegEnvelopeOpen />OPEN</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="text-3xl font-bold">20</h3>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                     <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><FcHighPriority className="text-red-600"/>URGENT</h2>

                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="text-3xl font-bold">20</h3>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><GoClock />PENDING</h2>
                    
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="text-3xl font-bold">20</h3>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                    <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><FaCheck />RESOLVED</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h3 className="text-3xl font-bold">20</h3>
                    </div></div>    
            
            </div>
        </div>
        
    </div>
  )
}

export default Hero