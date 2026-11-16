import React from 'react'

const create = () => {
    return (
        <div className="bg-slate-50 min-h-screen justify-between flex flex-col  p-2">
            <div className="flex justify-between items-center border-b pb-4 border-black">
                <div>
                    <h2 className="text-2xl font-bold">Create a new ticket</h2>
                    <p className="text-slate-500 text-sm">Provide the details below so that the support team can assist you.</p>
                </div>

                <span className="bg-violet-600 text-white px-3 py-1 rounded-full">New Request</span>
            </div>

            <div className="flex w-full ">
                <div className='w-1/2'>

                    <div className="flex flex-col gap-2 mt-4">
                        <h2 className="text-slate-900 font-bold text-lg">Ticket Title</h2>
                        <input type="text" placeholder="eg. Laptop won't connect to Wi-Fi" className="border w-full p-2 rounded-lg mt-1 mb-4" />
                    </div>
                    <div>
                        <h2 className="text-slate-900 font-bold text-lg">Description</h2>
                        <input type="text" placeholder="Describe the issue, what happened and any error messages..." className="border w-full  text-align-top p-2 rounded-lg mt-1 mb-4" />
                    </div>
                    <div>
                        <h2 className="text-slate-900 font-bold text-lg">Category</h2>
                        <input type="text" placeholder="eg. Hardware, Software, Network..." className="border w-full p-2 rounded-lg mt-1 mb-4" />
                    </div>
                    <div>
                        <h2 className="text-slate-900 font-bold text-lg">Priority</h2>
                        <select className="border w-[20%] p-2 rounded-lg mt-1 mb-4">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="text-slate-900 font-bold text-lg">Affected device</h2>
                        <input type="text" placeholder="eg. Laptop, Desktop, Server..." className="border w-[50%] p-2 rounded-lg mt-1 mb-4" />
                    </div>
                    <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center">

                        <label htmlFor="attachment" className="cursor-pointer">

                            <div className="flex flex-col items-center gap-2">

                                <p className="text-2xl">📎</p>

                                <p className="font-semibold">
                                    Click to upload attachments
                                </p>

                                <p className="text-sm text-gray-500">
                                    PNG, JPG, PDF or DOCX
                                </p>

                            </div>

                        </label>

                        <input
                            type="file"
                            id="attachment"
                            multiple
                            accept=".png,.jpg,.jpeg,.pdf,.docx"
                            className="hidden"
                            onChange={(e) => setAttachments(Array.from(e.target.files))}
                        />

                    </div>
                    <div></div>
                </div>
                <div className="text-black w-1/2 p-3">
                    <h2 className="font-bold text-indigo-950 text-xl"></h2>
                    
                </div>
            </div>

        </div>


    )
}

export default create