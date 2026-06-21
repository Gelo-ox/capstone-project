import React from 'react'
import { menuItems } from '../assets/assets.js'
import { images, users } from '../assets/assets.js'
import {NavLink} from 'react-router-dom'
import {Home} from 'lucide-react'

const Sidebar = () => {

    const user = users[4]
    const navLinkClass = ({isActive}) => `block px-10 py-4 rounded-full ${isActive ? 'bg-[#399918] font-medium' : ""}`
    

    return (
        <aside className='h-screen bg-[#31511E] p-4 w-sm'>
            <div className='flex items-center gap-5'>
                <img src={images.logo} className='w-20'/>
                <h2 className='text-3xl text-white font-bold'>SPMS</h2>
            </div>
            <hr className='mt-5 mb-20 text-white' />
            <ul className='text-2xl font-light'>
                    {menuItems.map((item) => {

                        const Icon = item.icon

                        if (item.roles.includes(user.role)){
                            return (
                                <NavLink to={item.path} key={item.label} className={navLinkClass}>
                                    <div className='flex gap-7 items-center'>
                                        <Icon className='font-bold text-white w-8 h-8' strokeWidth={2.5}/>
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