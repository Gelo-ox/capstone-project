import React from 'react'
import { menuItems } from '../assets/assets.js'
import { images, users } from '../assets/assets.js'
import {NavLink} from 'react-router-dom'
import {Home} from 'lucide-react'

const Sidebar = () => {

    const user = users[4]
    const navLinkClass = ({isActive}) => `block px-10 py-2 rounded-sm ${isActive ? 'bg-[#399918] font-medium' : ""}`
    

    return (
        <aside className='h-screen bg-[#31511E] p-4 w-[280px]'>
            <div className='flex items-center gap-5'>
                <img src={images.logo} className='w-15'/>
                <h2 className='text-2xl text-white font-bold'>SPMS</h2>
            </div>
            <hr className='mt-5 mb-20 text-white' />
            <ul className='text-md font-light'>
                    {menuItems.map((item) => {

                        const Icon = item.icon

                        if (item.roles.includes(user.role)){
                            return (
                                <NavLink to={item.path} key={item.label} className={navLinkClass}>
                                    <div className='flex gap-4 justify-start  items-center'>
                                        <Icon className='font-bold text-white w-6 h-6' strokeWidth={2.5}/>
                                        <p className='text-white truncate'>{item.label}</p>
                                    </div>
                                </NavLink>
                            )
                        }
                    })}
            </ul>
            
        </aside>
    )
}               

export default Sidebar