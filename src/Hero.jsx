import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import { FcHighPriority } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


const Hero = () => {
    return (
        <div className="m-4">
            <div className="flex justify-between items-center">
                <div className="flex justify-between mb-4">
                    <h1 className="text-4xl font-bold text-white">Tickets</h1>
                </div>
                <div className="flex gap-2">
                    <span className="border cursor-pointer flex gap-2 border-gray-300 p-1 bg-sky-900 text-white items-center text-sm rounded-lg font-bold "><MdOutlineFileDownload /> Export</span>
                    <span className="border cursor-pointer border-gray-300 p-1 items-center text-sm bg-sky-900 rounded-lg font-bold text-white">+ New Ticket</span>
                </div>

            </div>
            <div classsName="flex flex-col ">

                <div className="flex justify-between ">
                    <div className="bg-sky-900 cursor-pointer text-white rounded-lg p-3 w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-white"><MdOutlineDoNotDisturbOnTotalSilence className="" />TOTAL TICKETS</h2>
                        <div className="bg-sky-600/60 rounded-lg p-2 flex flex-col text-white gap-2">
                            <h3 className="text-3xl font-bold">43</h3>
                            <p className="text-sm ">All support requests</p>
                        </div>
                    </div>
                    <div className="bg-sky-900 cursor-pointer rounded-lg p-3  w-full m-2 text-white">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold "><FaRegEnvelopeOpen className="" />OPEN</h2>
                        <div className="bg-sky-600/60 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">6</h3>
                            <p className="text-sm  ">Currently awaiting resolution</p>

                        </div>
                    </div>
                    <div className=" bg-red-700 cursor-pointer text-white rounded-lg p-3  w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold "><FcHighPriority className="text-red-600" />URGENT</h2>

                        <div className=" bg-red-800 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">3</h3>
                            <p className="text-sm  ">Require priority attention</p>
                        </div>
                    </div>
                    <div className="bg-amber-500 cursor-pointer rounded-lg p-3  w-full m-2 text-white">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold "><GoClock className="" />PENDING</h2>

                        <div className="bg-amber-600 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">14</h3>
                            <p className="text-sm  ">Tickets waiting for a response.</p>
                        </div>
                    </div>
                    <div className="bg-green-600 cursor-pointer rounded-lg p-3  w-full m-2 text-white">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold "><FaCheck className="" />RESOLVED</h2>
                        <div className="bg-green-700 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">20</h3>
                            <p className="text-sm  ">Successfully resolved tickets.</p>
                        </div></div>

                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="relative ">
                        <CiSearch
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={20}
                        />

                        <input
                            type="text"
                            placeholder="Search tickets by subject, Customer, ID..."
                            className="border w-[400px] bg-white/90 text-black border-gray-300 pl-10 pr-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <fieldset className="border border-gray-300 rounded-lg p-2 ">
                            <legend>
                                Status
                            </legend>
                            <select className="">
                                <option value="All" className="bg-gray-700">All Tickets</option>
      <option value="Open" className="bg-gray-700">Open</option>
      <option value="Pending" className="bg-gray-700">Pending</option>
      <option value="Resolved" className="bg-gray-700">Resolved</option>
      <option value="Closed" className="bg-gray-700">Closed</option>
                            </select>
                        </fieldset>
                        
                        <fieldset className="border border-gray-300 rounded-lg p-2 ">
                            <legend>
                                Sort
                            </legend>
                            <select>
                                <option value="newest" className="bg-gray-700">Newest</option>
                                <option value="oldest" className="bg-gray-700">Oldest</option>
                                <option value="priority" className="bg-gray-700">Priority</option>
                            </select>
                        </fieldset>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero