import React from 'react'
import { customers } from './CustomerData.js';
import { useParams } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { Link } from 'react-router-dom';


import { 
  FaArrowLeft, 
  FaUserCircle, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding,
   FaComment, FaCommentDots, FaComments, FaRegCommentDots, 
  FaPlus,
  FaTicketAlt,
  FaCheckCircle,
  FaCalendarAlt
} from 'react-icons/fa';

const CustomerProfile = () => {
    const { id } = useParams();
    const customer = customers.find(
        (customer) => customer.id === id
    );

    return (
        <div className='bg-violet-300/20 min-h-screen w-full p-2 rounded-lg'>

            {customer ? (
                <div>
                    {/* Top row */}
                        <div className="w-full flex mb-1 justify-between items-center pb-3">
                    
                            <Link to={`/customers`}>
                                <span className="cursor-pointer p-2 rounded-lg text-xs hover:bg-violet-300">
                                    ← Back To Customers
                                </span>
                            </Link>
                    
                           
                    
                        </div>
                    <div className='flex justify-between'>
                        <div className='flex w-full border-b-1 border-gray-300'>
                        <MdAccountCircle className="text-violet-600 flex pr-2 h-[50px] w-[50px]" />
                        <div className='w-full flex pb-4 flex-col '>
                            <h2 className='text-2xl text-violet-600 font-bold'>{customer.name}</h2>
                            <div className='flex'>
                                <p className='text-xs '>{customer.id} - </p>
                                <p className='text-xs'> {customer.company}</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 gap-1  flex  flex-col items-center border-b-1 border-gray-300'>
                        <h3 className={`text-xs p-1 font-semibold text-white rounded-lg ${customer.status === "Active" ? "bg-green-400" : "bg-red-600"}`}>{customer.status}</h3>
                         <Link to={`/message/${customer.id}`}> 
                        <h3 className="flex p-1  gap-2 items-center bg-violet-600 text-white cursor-pointer hover:bg-gray-700 border-2 hover:border-yellow-400 rounded-lg" ><FaCommentDots />Message</h3>
                        </Link>
                    </div>
                    </div>
                    

                    <div class="grid grid-cols-2 p-2 bg-gray-300 rounded-lg grid-rows-2 gap-2 mt-4  text-purple-600">
                        <div class="  p-4">
                            <div className='flex  items-center gap-2'>
                                <h2><FaTicketAlt  />
</h2>

                            <h3 className='text-3xl font-bold'>{customer.totalTickets}</h3>
                            </div>
                            
                            <p className='font-semibold text-sm text-gray-600'>Total Tickets</p>
                        </div>
                        <div class=" p-4" >
                            <div className='flex items-center gap-2'>
                                <p> <FaCalendarAlt /></p>
                            <h3 className='text-2xl font-bold'>{customer.regDate}</h3>
                            </div>
                            
                            <p className='font-semibold text-sm text-gray-600'>Registration Date</p>
                        </div>
                        <div class=" p-4">
                            <div className='flex items-center gap-2'>
                                <FaCheckCircle className={` ${customer.status === "Active" ? "text-green-500" : "text-red-500"}`} />
                                <h3 className={`text-2xl font-bold ${customer.status === "Active" ? "text-green-500" : "text-red-500" }`}>{customer.status}</h3>
                            </div>
                            
                            <p className='font-semibold text-sm text-gray-600'>Status</p>
                        </div>
                        <div class=" p-4">
                            <div className='flex items-center gap-2'>
                                <FaBuilding />
                                <h3 className='text-2xl font-bold'>{customer.company}</h3>
                            </div>

                            
                            <p className='font-semibold text-sm text-gray-600'>Company</p>
                        </div>
                    </div>

                    <div className='mt-4 bg-gray-300 rounded-lg w-1/2 p-2'>
                        <h2 className='text-lg font-semibold'>Contact Information</h2>
                        <div className='pt-2'>
                            <p className='text-xs font-semibold text-gray-600'>Email - {customer.email}</p>

                            <p className='text-xs font-semibold text-gray-600'>Phone - {customer.phone}</p>

                            <p className='text-xs font-semibold text-gray-600'>Company - {customer.company}</p>
                        </div>
                    </div>




                </div>
            ) : (
                <p>Customer not found.</p>
            )}

        </div>
    )
}
export default CustomerProfile