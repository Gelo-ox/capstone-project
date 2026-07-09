import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import IpcrSubmission from './pages/IpcrSubmission.jsx'
import ForReview from './pages/ForReview.jsx'
import Users from './pages/Users.jsx'
import SubmissionManagement from './pages/SubmissionManagement.jsx'
import Login from './pages/Login.jsx'
import Layout from './components/Layout.jsx'
import Department from './pages/Department.jsx'
import AddDepartment from './components/modals/AddDepartment.jsx'

const App = () => {
  return ( 
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route element={<Layout/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/submission' element={<IpcrSubmission/>}/>
          <Route path='/review' element={<ForReview/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/submission-management' element={<SubmissionManagement/>}/>
          <Route path='/submission-management' element={<SubmissionManagement/>}/>
          <Route path='/department' element={<Department/>}/>
        </Route>
      </Routes>
  )

}

export default App
