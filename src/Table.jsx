import React, {useState} from 'react'

const Table = () => {
   const [searchTerm, setSearchTerm] = useState("")

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

const filteredTickets = tickets.filter((ticket) =>
  ticket.subject.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
ticket.id.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
  ticket.priority.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
  ticket.status.toLowerCase().includes(searchTerm.toLocaleLowerCase())
);

return (
  <>
    <input 
type="text"
placeholder="Search tickets by subject, ID, priority, or status..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
className="w-1/2 mt-3 mb-3 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500  "
      
      />
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      
       <table className="w-full min-w-[600px] border-collapse border border-indigo-950/20 shadow-sm">
            <thead className="bg-indigo-950 border-b border-indigo-900 text-violet-200 text-xs uppercase tracking-wider font-semibold">
                <tr className="border-b border-indigo-900">
                    {headers.map((header, index) => (
                        <th
                            key={index}
                            className="hover:bg-indigo-900 transition-colors cursor-pointer border-r border-indigo-900 px-4 py-3 text-left text-sm"
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {filteredTickets.map((ticket) => (
                    <tr key={ticket.id} className="odd:bg-white even:bg-violet-50/40 hover:bg-violet-100/60 transition-colors border-b border-indigo-950/10">
                        <td className="px-4 py-3 border-r border-indigo-950/10 text-sm text-violet-700 font-bold">{ticket.id}</td>
                        <td className="px-4 py-3 border-r border-indigo-950/10 text-sm text-indigo-950 font-medium">{ticket.subject}</td>
                        <td className={`px-4 py-3 border-r border-indigo-950/10 text-sm font-semibold ${
                            ticket.priority === 'Urgent' ? 'text-rose-600' :
                            ticket.priority === 'High' ? 'text-amber-600' :
                            ticket.priority === 'Medium' ? 'text-violet-600' :
                            'text-slate-500'
                        }`}>{ticket.priority}</td>
                        <td className={`px-4 py-3 border-r border-indigo-950/10 text-sm font-semibold ${
                            ticket.status === 'Resolved' ? 'text-emerald-600' :
                            ticket.status === 'Pending' ? 'text-orange-500' :
                            'text-indigo-700'
                        }`}>{ticket.status}</td>
                        <td className="px-4 py-3 border-r border-indigo-950/10 text-sm text-slate-600">{ticket.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    </>
)
}

export default Table