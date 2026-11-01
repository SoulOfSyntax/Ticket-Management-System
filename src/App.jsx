import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'

function App() {
  

  return (
    <div className='bg-slate-900 min-h-screen text-white w-full'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
