import React, { useEffect, useState } from 'react'
import { icons, ipcrSubmissionModule } from '../assets/assets.js'

const SubmissionManagement = () => {

    const PlusIcon = icons.PlusCircle
    const Calendar = icons.Calendar
    const [ipcrSubmission, setIpcrSubmission] = useState({})

    useEffect(() => {
        setIpcrSubmission(ipcrSubmissionModule[0])
    },[])

    return (
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-5xl'>Submission Period Management</h2>
                    <p className='text-2xl mt-3'>Manage the opening and closing of IPCR submission periods</p>
                </div>
                <div>
                    <div className='flex items-center gap-5 bg-green-600 px-5 py-4 rounded-md hover:cursor-pointer hover:bg-green-700'>
                        <PlusIcon className='text-white w-7 h-7'/>
                        <p className='font-medium text-xl text-white'>Open New Submission Period</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-around items-center p-5 bg-white mt-10 rounded-2xl shadow-sm'>
                <div>
                    <p className='text-xl font-medium'>Current Status</p>
                    <p className='text-5xl font-medium text-green-600 mb-8'>{ipcrSubmission.status}</p>
                    <p className='text-xl font-medium'>{ipcrSubmission.quarter} {ipcrSubmission.year}</p>
                    <p className='text-xl  inline'>Submission ends in: </p>
                    <p className='text-xl font-medium inline'>{ipcrSubmission.end_date}</p>
                </div>
                <div className='w-0.5 bg-gray-600 self-stretch'>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-5'>
                        <Calendar className='w-15 h-15'/>
                        <div>
                            <p className='text-2xl font-medium'>Submission is currently {ipcrSubmission.status}</p>
                            <p className='text-lg'>Employees can now upload their IPCR</p>
                        </div>
                    </div>
                    <button className='bg-blue-600 py-3 px-5 self-center text-xl font-medium text-white rounded-sm cursor-pointer hover:bg-blue-500'>Details</button>
                </div>
            </div>
            <div className='p-5 bg-white rounded-2xl mt-10'>
                <h2 className='text-2xl font-medium mb-5'>Submission Period History</h2>
                <div className='bg-gray-200 grid grid-cols-[1fr_1fr_1fr_1fr] items-center p-5 rounded-sm'>
                    <p className='text-xl font-medium'>Semester</p>
                    <p className='text-xl font-medium'>Status</p>
                    <p className='text-xl font-medium'>Date</p>
                    <p className='text-xl font-medium'>Action</p>
                </div>
                <div className='grid grid-cols-[1fr_1fr_1fr_1fr] items-center p-5 rounded-sm hover:bg-gray-100 mt-5 text-xl'>
                    <p>{ipcrSubmission.quarter}</p>
                    <p className='bg-green-200 rounded-full text-green-600 px-3 py-2 border-2 justify-self-start'>{ipcrSubmission.status}</p>
                    <p>{ipcrSubmission.start_date} - {ipcrSubmission.end_date}</p>
                    <p className=''>
                        <button className='border-blue-600 border-2 py-3 px-5 rounded-sm cursor-pointer'>View</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SubmissionManagement
