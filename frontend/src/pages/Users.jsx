import React, { useEffect, useState } from 'react'
import { icons, ipcrModule, users } from '../assets/assets.js'
import { Filter } from 'lucide-react'

const ForReview = () => {

    const Search = icons.Search

    const [ipcr, setIPCR] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        setIPCR(ipcrModule)
        setAllUsers(users)
    }, [])

    return (
        <div className='p-10'> 
            <h2 className='font-bold text-5xl mb-5'>Users</h2>
            <div className='bg-white rounded-sm p-5 overflow-x-auto'>
                <div className='flex justify-end gap-10 mb-5'>
                    <div className='flex p-3 rounded-md items-center gap-5 bg-gray-100'>
                        <input type="text" placeholder='Search...' className=' text-xl focus:outline-none'/>
                        <Search className='w-7 h-7'/>
                    </div>
                    <div className='flex items-center bg-gray-100 p-3 gap-5'>
                        <Filter/>
                        <select name="" id="" className='rounded-md  text-xl focus:outline-none'>
                            <option value="Department">Department</option>
                            <option value="College">College</option>
                            <option value="Submitted">Submitted</option>
                            <option value="Not Submitted">Not Submitted</option>
                        </select>
                    </div>
                </div>
                <div className='min-w-225'>
                
                    <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] bg-gray-200 p-5 text-xl font-medium mb-5 items-center'>
                        <p>Name</p>
                        <p>Department</p>
                        <p>College</p>
                        <p>Status</p>
                        <p>Roles</p>
                        <p>Submitted</p>
                    </div>
                    <div>
                        {
                        allUsers?.map(user => (
                            <div key={user.user_id} className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] p-5 text-xl hover:bg-gray-100 items-center'>
                                <p>{user.name}</p>
                                <p>{user.department}</p>
                                <p className='truncate'>{user.college}</p>
                                <p className='truncate whitespace-nowrap'>Active</p>
                                <p className='truncate whitespace-nowrap'>{user.role}</p>
                                <p>
                                    <button className='bg-green-200 p-2 cursor-pointer rounded-md text-green-600 font-medium'>Submitted</button>
                                </p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForReview
