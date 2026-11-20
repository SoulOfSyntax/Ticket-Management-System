import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { customers } from './CustomerData'
import { useParams, Link } from 'react-router-dom'
import { IoIosCall } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";


const Message = () => {
    const { id } = useParams();

    const customer = customers.find(
        (customer) => customer.id === id
    );

    return (
        <div className="w-full h-[calc(100vh-2rem)] overflow-hidden  min-h-screen flex flex-col">

    {/* Top row */}
    <div className="w-full border-b border-gray-300 flex mb-3 justify-between items-center pb-3">

        <Link to={`/customer/${customer.id}`}>
            <span className="cursor-pointer p-2 text-xs rounded-lg hover:bg-violet-300">
                ← Back To Customer Profile
            </span>
        </Link>

        <h2 className={`text-xs p-1 text-white rounded-lg ${
            customer.status === "Active" ? "bg-green-500" : "bg-red-500"
        }`}>
            {customer.status}
        </h2>

    </div>

    {/* Customer header */}
    <div className="flex border-b border-gray-300 justify-between items-center py-4">

        <div className="flex items-center gap-3">

            <h2 className="text-5xl">
                <MdAccountCircle />
            </h2>

            <div className="flex flex-col">
                <h2 className="text-lg font-semibold">
                    {customer.name}
                </h2>

                <p className="text-sm text-gray-600">
                    {customer.email}
                </p>
            </div>

        </div>

        <button
            type="button"
            className="hover:bg-violet-200 rounded-lg p-3 transition"
            aria-label="Call customer"
        >
            <IoIosCall className="text-xl" />
        </button>

    </div>

    <div className="w-full flex-1 min-h-0 flex flex-col items-center justify-center">
        <h2 className='text-xl  font-bold text-gray-800'><LuMessagesSquare /></h2>
        <h2 className='text-xl font-semibold'>No messages yet</h2>
        <h2 className='text-sm text-gray-600'>Start a conversation with this customer. Messages will appear here.</h2>
    </div>

    <div className="w-full mt-auto  shrink-0 bg-gray-200 rounded-lg p-1  flex gap-2 items-center">
    <input
        type="text"
        placeholder="Enter message"
        className="bg-gray-300 rounded-lg border-0 focus:outline-0 p-2 flex-1"
    />
    <h2 className='text-lg cursor-pointer pr-2'><IoIosSend /></h2>
</div>

</div>
    )
}

export default Message