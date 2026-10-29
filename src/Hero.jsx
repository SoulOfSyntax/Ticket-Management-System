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
                    <h1 className="text-4xl font-bold">Tickets</h1>
                </div>
                <div className="flex gap-2">
                    <span className="border flex gap-2 border-gray-300 p-1 items-center text-sm rounded-lg font-bold"><MdOutlineFileDownload /> Export</span>
                    <span className="border border-gray-300 p-1 items-center text-sm bg-purple-700 rounded-lg font-bold">+ New Ticket</span>
                </div>

            </div>
            <div classsName="flex flex-col ">

                <div className="flex justify-between ">
                    <div className="bg-gray-200 rounded-lg p-3 w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><MdOutlineDoNotDisturbOnTotalSilence className="text-purple-600" />TOTAL TICKETS</h2>
                        <div className="bg-gray-100 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">43</h3>
                            <p className="text-sm text-purple-800">All support requests</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><FaRegEnvelopeOpen className="text-blue-600" />OPEN</h2>
                        <div className="bg-gray-100 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">6</h3>
                            <p className="text-sm text-blue-800 ">Currently awaiting resolution</p>

                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><FcHighPriority className="text-red-600" />URGENT</h2>

                        <div className="bg-gray-100 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">3</h3>
                            <p className="text-sm text-red-600 ">Require priority attention</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><GoClock className="text-amber-500" />PENDING</h2>

                        <div className="bg-gray-100 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">14</h3>
                            <p className="text-sm text-amber-500 ">Tickets waiting for a response.</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3  w-full m-2">
                        <h2 className=" flex items-center gap-2 text-lg font-semibold text-gray-600"><FaCheck className="text-green-600" />RESOLVED</h2>
                        <div className="bg-gray-100 rounded-lg p-2 flex flex-col gap-2">
                            <h3 className="text-3xl font-bold">20</h3>
                            <p className="text-sm text-green-600 ">Successfully resolved tickets.</p>
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
                            className="border w-[400px] border-gray-300 pl-10 pr-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <fieldset className="border border-gray-300 rounded-lg p-2 ">
                            <legend>
                                Status
                            </legend>
                            <select>
                                <option value="All">All Tickets</option>
      <option value="Open">Open</option>
      <option value="Pending">Pending</option>
      <option value="Resolved">Resolved</option>
      <option value="Closed">Closed</option>
                            </select>
                        </fieldset>
                        
                        <fieldset className="border border-gray-300 rounded-lg p-2 ">
                            <legend>
                                Sort
                            </legend>
                            <select>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="priority">Priority</option>
                            </select>
                        </fieldset>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero