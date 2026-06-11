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
            <div className='flex-1 inline-flex flex-col gap-5 p-5 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-5 items-center'>
                    <div className='p-3 bg-blue-600 rounded-xl'>
                        <User className='text-white w-6 h-6 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-2xl font-medium'>Users</h2>
                </div>
                <p className='text-5xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-5 p-5 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-5 items-center'>
                    <div className='p-3 bg-green-600 rounded-xl'>
                        <File className='text-white w-6 h-6 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-2xl font-medium'>Submitted</h2>
                </div>
                <p className='text-5xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-5 p-5 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-5 items-center'>
                    <div className='p-3 bg-yellow-600 rounded-xl'>
                        <Eye className='text-white w-6 h-6 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-2xl font-medium'>For Review</h2>
                </div>
                <p className='text-5xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-5 p-5 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-5 items-center'>
                    <div className='p-3 bg-purple-600 rounded-xl'>
                        <FileArchive className='text-white w-6 h-6 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-2xl font-medium'>Approved</h2>
                </div>
                <p className='text-5xl font-bold text-center'>{allUsers.length}</p>
            </div>
            <div className='flex-1 inline-flex flex-col gap-5 p-5 rounded-2xl shadow-md bg-white'>
                <div className='flex gap-5 items-center'>
                    <div className='p-3 bg-red-600 rounded-xl'>
                        <Clock className='text-white w-6 h-6 ' strokeWidth={2.5}/>
                    </div>
                    <h2 className='text-2xl font-medium'>Late submission</h2>
                </div>
                <p className='text-5xl font-bold text-center'>{allUsers.length}</p>
            </div>
        </div>
        
    )
}

export default StatsCard
