import {React, useContext} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet, Navigate, useLocation, replace } from 'react-router-dom'
import { AuthContext } from '../context/AuthContex.jsx'

const Layout = () => {

    const {user} = useContext(AuthContext);
    const location = useLocation()

    return (
        user ? 
        <div className='h-screen w-full flex overflow-hidden'>
            <Sidebar/>
            <div className='flex-1 overflow-y-scroll bg-[#F5F5F7]'>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
        : <Navigate to="/login" state={{from: location}} replace={true}/>
    )
}

export default Layout
