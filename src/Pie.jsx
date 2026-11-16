import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
    {name:"Open" , value:6},
    {name:"Pending" , value:14},
    {name:"Resolved" , value:20}
]

const COLORS = ['#6366f1', '#a855f7', '#3b82f6']

function TicketDonut() {
  return (
    <div className="bg-black rounded-lg p-4 w-1/2 m-2">
      <h2 className="text-violet-300 font-bold mb-4">
        Ticket Status
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TicketDonut