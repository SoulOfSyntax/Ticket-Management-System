import React from 'react'

const Table = () => {

    const headers = ["Ticket ID", "Subject", "Priority", "Status", "Date"];

    const tickets = [
  {
    id: "001",
    subject: "Unable to connect to office Wi-Fi",
    priority: "High",
    status: "Open",
    date: "2026-11-01",
  },
  {
    id: "002",
    subject: "Password reset request",
    priority: "Medium",
    status: "Pending",
    date: "2026-10-31",
  },
  {
    id: "003",
    subject: "Printer not responding",
    priority: "Low",
    status: "Resolved",
    date: "2026-10-30",
  },
  {
    id: "004",
    subject: "Computer running very slowly",
    priority: "High",
    status: "Open",
    date: "2026-10-29",
  },
  {
    id: "005",
    subject: "Unable to access company email",
    priority: "Urgent",
    status: "Pending",
    date: "2026-10-28",
  },
  {
    id: "006",
    subject: "Software installation request",
    priority: "Low",
    status: "Resolved",
    date: "2026-10-27",
  },
  {
    id: "007",
    subject: "Monitor displaying a black screen",
    priority: "High",
    status: "Open",
    date: "2026-10-26",
  },
  {
    id: "008",
    subject: "VPN connection keeps disconnecting",
    priority: "Medium",
    status: "Pending",
    date: "2026-10-25",
  },
];

  return (
    <table className="w-full border-collapse   border  ">
        <thead className="">
            <tr className=" border-b">
                {headers.map((header, index) => 
                        <th key={index} className="px-20 bg-gray-800 border-r last:border-r-0 text-left font-semibold py-3">
                            <span>{header}</span>

                        </th>
                
                )}
            </tr>
        </thead>
          <tbody>
    {tickets.map((ticket) => (
      <tr key={ticket.id} className="border-b hover:bg-slate-500">
        <td className="px-20 border-r py-3">{ticket.id}</td>
        <td className="px-20 border-r py-3 ">{ticket.subject}</td>
        <td className="px-20 border-r py-3 ">{ticket.priority}</td>
        <td className="px-20 border-r py-3 ">{ticket.status}</td>
        <td className="px-20 border-r py-3 ">{ticket.date}</td>
      </tr>
    ))}
  </tbody>
    </table>
  )
}

export default Table