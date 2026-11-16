import React from 'react'

const Notice = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-lg w-1/4 m-3 p-3 text-indigo-950">
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Service Desk</h2>
            <span className="bg-indigo-950 text-xs text-violet-300 rounded-full px-2.5 py-1">
                3 Notices
            </span>
        </div>

        <div>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mt-3">
                <p className="font-bold">Outstanding tickets</p>
                <p className="text-xs text-slate-600">6 open tickets are awaiting resolution.</p>
                <p className="font-semibold text-sm text-rose-600 mt-1">ACTION REQUIRED</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mt-3">
                <p className="font-bold">Pending responses</p>
                <p className="text-xs text-slate-600">14 tickets are waiting for a response or further action.</p>
                <p className="font-semibold text-sm text-amber-600 mt-1">FOLLOW UP</p>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mt-3">
                <p className="font-bold">Weekly review</p>
                <p className="text-xs text-slate-600">Review resolved and outstanding tickets this week</p>
                <p className="font-semibold text-sm text-violet-600 mt-1">SCHEDULED TASK</p>
            </div>
        </div>
    </div>

  )
}

export default Notice