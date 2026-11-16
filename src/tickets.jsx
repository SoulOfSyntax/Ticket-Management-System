import React from 'react'

const tickets = () => {
  return (
    <div>
        <div className="flex justify-between border-black items-center mt-4">
                            <div className="relative border-black   ">
                                <CiSearch
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    size={20}
                                />
        
                                <input
                                    type="text"
                                    placeholder="Search tickets by subject, Customer, ID..."
                                    className="border w-[400px]  text-black border-black pl-10 pr-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
        
                            <div className="flex gap-2">
                                <fieldset className="border border-black rounded-lg p-2 ">
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
        
                                <fieldset className="border border-black rounded-lg p-2 ">
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
  )
}

export default tickets