import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FcHighPriority } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


const Hero = () => {
    return (
        <div className="m-4 w-full justify-right text-black">
            <div className="top-0 z-0 ">
                <div className="flex  ">
                    <LuLayoutDashboard className="text-3xl text-violet-600" />
                    <h2 className="text-3xl pl-2 flex mk font-bold"> Dashboard</h2>
                </div>
            </div>
            <div classsName="flex flex-col ">

                <div className="flex justify-between ">
                    <div className="bg-indigo-950  h-[100px] cursor-pointer  rounded-lg p-3 w-full m-1 text-violet-300">
                        <p className="flex items-center gap-2 text-sm font-semibold"><MdOutlineDoNotDisturbOnTotalSilence /> Total tickets</p>
                        <h3 className="text-2xl font-bold">43</h3>
                        <p className="text-xs">All support requests</p>
                    </div>

                    <div className="bg-indigo-950  m-1 cursor-pointer rounded-lg p-2 w-full h-[100px] text-violet-300">
                        <p className="flex items-center gap-2 text-sm font-semibold">
                            <FaRegEnvelopeOpen /> Open Tickets
                        </p>
                        <h3 className="text-2xl font-bold">6</h3>
                        <p className="text-xs">Currently awaiting resolution</p>
                    </div>

                    <div className="bg-indigo-950  m-1 cursor-pointer rounded-lg p-2 w-full h-[100px] text-violet-300">
                        <p className="flex items-center gap-2 text-sm font-semibold">
                            <GoClock /> Pending Tickets
                        </p>
                        <h3 className="text-2xl font-bold">14</h3>
                        <p className="text-xs">Tickets waiting for a response.</p>
                    </div>

                    <div className="bg-indigo-950  m-1 cursor-pointer rounded-lg p-2 w-full h-[100px] text-violet-300">
                        <p className="flex items-center gap-2 text-sm font-semibold">
                            <FaCheck /> Resolved Tickets
                        </p>
                        <h3 className="text-2xl font-bold">20</h3>
                        <p className="text-xs">Successfully resolved tickets.</p>
                    </div>

                </div>
                
                
            </div>

        </div>
    )
}

export default Hero