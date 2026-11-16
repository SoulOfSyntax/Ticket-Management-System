import React, {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import Table from './Table';

const AllTickets = () => {
   

    return (
        <div className="bg-slate-50 min-h-screen  ">
            <div className="flex justify-between space-y-4 ">
                <div>
                    <h2 className="text-slate-900 font-bold text-2xl">All Tickets</h2>
                    <p className="text-slate-500 text-sm">Manage and track support requests</p>
                    
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <span className="bg-violet-100 text-violet-700 font-semibold text-xs px-3 py-1 rounded-full">
                        <p>43 Tickets</p>
                    </span>
                    <button className="bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm px-4 py-2 rounded-lg shadow-sm">+Create</button>
                </div>

            </div>
            <Table />
        </div>
    )
}

export default AllTickets