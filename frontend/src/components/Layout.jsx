import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='h-screen w-full flex overflow-hidden'>
            <Sidebar/>
            <div className='flex-1 overflow-y-scroll bg-[#F5F5F7]'>
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default Layout
