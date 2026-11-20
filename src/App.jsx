import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import Table from './Table'
import Sidebar from './Sidebar'
import WeeklyPerformance from './WeeklyPerformance'
import Notice from './Notice'
import Pie from './Pie'
import Settings from './Settings'
import Help from './Help'
import PriorityChart from './PriorityChart'
import AllTickets from './AllTickets'
import CreateTicket from './create'
import Customer from './Customers'
import CustomerDetails from './CustomerProfile'
import Messages from './Message'
import Reports from "./Reports"
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className='bg-slate-50 min-h-screen text-black w-full'>
      <Sidebar />

      <main className='ml-[25%] w-[75%] p-4'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="flex text-black">
                  <WeeklyPerformance />
                  <Notice />
                </div>
                <div className="flex gap-4 text-black">
                  <Pie />
                  <PriorityChart />
                </div>
              </>
            }
          />
          <Route path="/" element={<Hero />} /> 
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/customer/:id" element={<CustomerDetails />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/message/:id" element={<Messages />} />
          <Route path="/tickets" element={<AllTickets />} />
        </Routes>
      </main>
    </div>
  )
}



export default App
