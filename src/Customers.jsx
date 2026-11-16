import React, { useState } from 'react'
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { customers } from './CustomerData.js';

const Customers = () => {
    const [searchTerm, setSearchTerm] = useState("")


    const filteredCustomers = customers.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (

        <div className="bg-slate-50 min-h-screen p-4">
            <h2 className="text-indigo-950 text-3xl font-bold mb-4">Customer Directory</h2>
            <input
                type="text"
                placeholder="Search by name, company or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-1/2 mt-3 mb-3 p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div >
                {filteredCustomers.map((customer) => (
                    <Link to={`/customer/${customer.id}`} key={customer.id} className="block">
                        <div key={customer.id} className="bg-indigo-800 rounded-lg text-violet-300 shadow-md p-4 mb-4">
                            <div className="flex items-center gap-2 mb-1">
                                <MdAccountCircle className="h-[40px] w-[40px]" />
                                <h3 className="text-2xl font-bold flex align-center gap-2 ">{customer.name}</h3>
                            </div>
                            <p className="pl-12 font-semibold text-lg">{customer.company}</p>
                            <p className="pl-12 font-semibold text-sm">{customer.email}</p>
                            <p className="pl-12 font-semibold text-sm">{customer.phone}</p>
                            <div className="flex  justify-end w-full ">
                                <p className={`p-2 text-sm text-black font-semibold rounded-full ${customer.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>{customer.status}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}


export default Customers