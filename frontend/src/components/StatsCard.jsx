import React, { useEffect, useState } from 'react'
import {User, File, Eye, FileArchive, Clock} from 'lucide-react'
import {users} from '../assets/assets.js'

const StatsCard = () => {

    const [allUsers, setallUsers] = useState([])
    const currentUser = users[4]

    useEffect(() => {
        setallUsers(users.filter(user => user.department === currentUser.department))
    }, [])


    return (
        <div className='flex gap-5'>
            <div className='flex-1 inline-flex flex-col gap-3 p-3 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-blue-600 rounded-xl'>
                        <User className='text-white w-5 h-5 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-md font-medium'>Users</h2>
                </div>
                <p className='text-4xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-3 p-3 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-green-600 rounded-xl'>
                        <File className='text-white w-5 h-5 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-md font-medium'>Submitted</h2>
                </div>
                <p className='text-4xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-3 p-3 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-yellow-600 rounded-xl'>
                        <Eye className='text-white w-5 h-5 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-md font-medium'>Users</h2>
                </div>
                <p className='text-4xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-3 p-3 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-purple-600 rounded-xl'>
                        <FileArchive className='text-white w-5 h-5 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-md font-medium'>Approved</h2>
                </div>
                <p className='text-4xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-3 p-3 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-red-600 rounded-xl'>
                        <Clock className='text-white w-5 h-5 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-md font-medium'>Late</h2>
                </div>
                <p className='text-4xl font-bold text-center'>{allUsers.length}</p>
            </div>
            
        </div>
        
    )
}

export default StatsCard
