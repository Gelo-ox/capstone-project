import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import IpcrSubmission from './pages/IpcrSubmission.jsx'

const App = () => {


  return ( 
    <div className='h-screen w-full flex overflow-hidden'>
      <div className='shrink-0'>
        <Sidebar/>
      </div>
      <div className='flex-1 overflow-y-scroll bg-[#F5F5F7]'>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/submission' element={<IpcrSubmission/>}/>
          </Routes>
        </main>
        
      </div>

    </div>
  )

}

export default App
