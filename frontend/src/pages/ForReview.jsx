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
            <h2 className='font-bold text-3xl mb-5'>IPCR Review</h2>
            <div className='bg-white rounded-sm p-5 overflow-x-auto'>
                <div className='flex justify-end gap-10 mb-5'>
                    <div className='flex p-2 rounded-md items-center gap-5 bg-gray-100'>
                        <input type="text" placeholder='Search...' className=' text-md focus:outline-none'/>
                        <Search className='w-5 h-5'/>
                    </div>
                    <div className='flex items-center bg-gray-100 p-2 gap-5'>
                        <Filter className='w-5 h-5'/> 
                        <select name="" id="" className='rounded-md  text-md focus:outline-none'>
                            <option value="Department">Department</option>
                            <option value="Name">Name</option>
                            <option value="College">College</option>
                            <option value="Date">Date Submitted</option>
                        </select>
                    </div>
                </div>
                <div className='min-w-225'>
                
                    <div className='grid grid-cols-[1fr_1fr_2fr_2fr_2fr_1fr] bg-gray-200 p-5 text-md font-medium mb-5 items-center'>
                        <p>#</p>
                        <p>Type</p>
                        <p>Name</p>
                        <p>File Name</p>
                        <p>Date Submitted</p>
                        <p>Action</p>
                    </div>
                    <div>
                        {
                        ipcr?.map(item => (
                            <div key={item.ipcr_id} className='grid grid-cols-[1fr_1fr_2fr_2fr_2fr_1fr] p-2 text-md hover:bg-gray-100 items-center'>
                                <p>{item.ipcr_id}</p>
                                <p>{item.type}</p>
                                <p className='truncate'>{allUsers[item.user_id - 1].name}</p>
                                <p className='truncate whitespace-nowrap'>{item.file_name}</p>
                                <p className='truncate whitespace-nowrap'>{item.date_submitted}</p>
                                <p>
                                    <button className='bg-blue-500 p-2 cursor-pointer rounded-md text-white'>Review</button>
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
