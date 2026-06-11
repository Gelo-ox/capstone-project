import React from 'react'
import { useState, useEffect } from 'react'
import { users } from '../assets/assets.js'
import {BellIcon, User2} from 'lucide-react'

const Navbar = () => {

    const [user, setUser] = useState(null)
    const [isClicked, setIsClicked] = useState(false)
    const [notifClicked, setNotifClicked] = useState(false)

    useEffect(() => {
        setUser(users[6])
    },[])

    return (
        <nav className='bg-[#FFF6F6] shadow-sm  py-2 px-5 flex justify-end'>
            <div className='flex items-center gap-15'>
                <div onClick={() => setNotifClicked(!notifClicked)} className='relative cursor-point'>
                    <BellIcon className='w-8 h-8 text-black'/>
                    <div className='absolute -top-4 left-5 bg-red-500 p-4 w-5 h-5 text-white font-medium text-sm rounded-full flex justify-center items-center'>
                        10
                    </div>
                    <div className={`absolute top-10 right-0 w-md h-200 bg-white shadow-xl z-10 rounded-2xl overflow-auto ${notifClicked ? "block" : "hidden"}`}>
                        <h2 className='p-5 text-2xl font-medium'>Notifications</h2>
                    </div>
                </div>
                <div onClick={() => setIsClicked(!isClicked)} className='p-5 bg-gray-200 rounded-full hover:cursor-pointer relative'>
                    <User2 className='w-8 h-8 text-black'/>
                    <div className={`absolute p-3 bg-white -bottom-45 -left-18 rounded-md shadow-md ${isClicked ? "block" : "hidden"}`}>
                        <span className='absolute border-b-18 border-b-white border-r-18 border-l-18 border-r-transparent border-l-transparent -top-4 left-22'></span>
                        <p className='whitespace-nowrap text-xl bg-white px-5 py-5 w-50 hover:bg-gray-100'>View Profile</p>
                        <p className='whitespace-nowrap text-xl bg-white px-5 py-5 w-50 hover:bg-gray-100'>View Profile</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-xl'>{user?.name}</p>
                    <p className='font-light text-lg'>{user?.role}</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
