import React from 'react'
import { LuChartNoAxesCombined } from "react-icons/lu";

const Reports = () => {
  return (
    <div>
        <div className='border-b border-gray-300 p-2  '>
            <h2 className='text-xl font-semibold'>Reports</h2>
            
        </div>
        <div className='p-8 gap-4 flex flex-col items-center mt-10'>

            <h2 className='font-bold text-gray-500 text-2xl'><LuChartNoAxesCombined /></h2>
            <h2 className='font-bold text-xl'>No reports available yet</h2>
            <h3 className='text-sm'>Reports and analytics will appear here once reporting data becomes available.</h3>
        </div>
    </div>
  )
}

export default Reports