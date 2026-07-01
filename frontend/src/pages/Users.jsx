import React, { useEffect, useState } from 'react'
import { icons, ipcrModule, users, } from '../assets/assets.js'

const ForReview = () => {

    const Search = icons.Search
    const Filter = icons.Filter
    const PlusCircle = icons.PlusCircle

    const [ipcr, setIPCR] = useState([])
    const [allUsers, setAllUsers] = useState([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [college, setCollege] = useState("")
    const [department, setDepartment] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    useEffect(() => {
        setIPCR(ipcrModule)
        setAllUsers(users)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        console.log(name)
    }
    return (
        <div className='p-10'> 
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl mb-5'>Users</h2>
                <div className='flex items-center gap-3 bg-[#31511E] text-white px-3 py-2 rounded-sm cursor-pointer hover:bg-green-800'>
                    <PlusCircle/>
                    <button>Add new User</button>
                </div>
            </div>
            <div className='bg-white rounded-sm p-5 overflow-x-auto'>
                <div className='flex justify-end gap-10 mb-5'>
                    <div className='flex p-2 rounded-md items-center gap-5 bg-gray-100'>
                        <input type="text" placeholder='Search...' className=' text-md focus:outline-none'/>
                        <Search className='w-5 h-5'/>
                    </div>
                    <div className='flex items-center bg-gray-100 p-3 gap-5'>
                        <Filter/>
                        <select name="" id="" className='rounded-md  text-md focus:outline-none'>
                            <option value="Department">Department</option>
                            <option value="College">College</option>
                            <option value="Submitted">Submitted</option>
                            <option value="Not Submitted">Not Submitted</option>
                        </select>
                    </div>
                </div>
                <div className='min-w-225'>
                
                    <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] bg-gray-200 p-5 text-md font-medium mb-5 items-center'>
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
                            <div key={user.user_id} className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] p-2 text-md hover:bg-gray-100 items-center'>
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
            
            {/* Add User modal */}
            <div className='fixed inset-0 bg-black/50'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100  p-4 bg-white shadow-sm rounded-sm'>
                    <h2 className='font-medium text-lg mb-5'>Add New User</h2>
                    <form onSubmit={handleSubmit }>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="name"className='text-sm text-[#797979]'>Name</label>
                            <input onChange={(e) => setName(e.target.value)} id='name' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="email"className='text-sm text-[#797979]'>Email</label>
                            <input id='email' type="email" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="college"className='text-sm text-[#797979]'>College</label>
                            <input id='college' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="department"className='text-sm text-[#797979]'>Department</label>
                            <input id='department' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="username"className='text-sm text-[#797979]'>Username</label>
                            <input id='username' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="username"className='text-sm text-[#797979]'>Password</label>
                            <input id='username' type="password" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="username"className='text-sm text-[#797979]'>Role</label>
                            <input id='username' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='px-3 py-2 rounded-sm bg-red-600 text-white cursor-pointer'>Cancel</button>
                            <button className='px-3 py-2 rounded-sm bg-[#31511E] text-white cursor-pointer'>Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForReview
