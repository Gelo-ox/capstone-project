import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import IpcrSubmission from './pages/IpcrSubmission.jsx'
import ForReview from './pages/ForReview.jsx'
import Users from './pages/Users.jsx'
import SubmissionManagement from './pages/SubmissionManagement.jsx'

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
            <Route path='/review' element={<ForReview/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/submission-management' element={<SubmissionManagement/>}/>
          </Routes>
        </main>
        
      </div>

    </div>
  )

}

export default App
