import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'


const data = [
  { day: 'Mon', created: 8, resolved: 5 },
  { day: 'Tue', created: 6, resolved: 7 },
  { day: 'Wed', created: 10, resolved: 6 },
  { day: 'Thu', created: 5, resolved: 4 },
  { day: 'Fri', created: 9, resolved: 8 },
  { day: 'Sat', created: 3, resolved: 5 },
  { day: 'Sun', created: 4, resolved: 3 },
]

function WeeklyPerformance() {
  return (
   <div className="bg-white border border-slate-200 rounded-lg p-4 w-3/4">
      <h2 className="text-indigo-950 text-lg font-bold mb-4">
        Weekly Ticket Performance
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

          <XAxis dataKey="day" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Bar dataKey="created" fill="#7c3aed" />
          <Bar dataKey="resolved" fill="#1e1b4b" />

        </BarChart>
      </ResponsiveContainer>
    </div>

  )
}

export default WeeklyPerformance