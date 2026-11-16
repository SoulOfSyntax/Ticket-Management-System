import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const PRIORITY_COLORS = [
  '#fdba74',
  '#fb923c',
  '#f97316',
  '#e879a8',
]

const priorityData = [
  { priority: 'Low', count: 8 },
  { priority: 'Medium', count: 15 },
  { priority: 'High', count: 12 },
  { priority: 'Urgent', count: 4 },

]

function PriorityChart() {
  return (
   <div className="bg-indigo-600/80 backdrop-blur-lg shadow-lg rounded-lg p-4 w-1/2 m-2">
  <h2 className="text-black font-bold mb-4">
    Tickets by Priority
  </h2>

  <ResponsiveContainer width="100%" height={280}>
    <BarChart data={priorityData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#818cf8" />
      <XAxis dataKey="priority" stroke="#000000" />
      <YAxis stroke="#000000" />
      <Tooltip />

      <Bar dataKey="count" fill="#172554" />
    </BarChart>
  </ResponsiveContainer>
</div>
  )
}

export default PriorityChart