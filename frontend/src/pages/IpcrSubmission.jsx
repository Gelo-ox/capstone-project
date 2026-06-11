import React, { useEffect, useState } from 'react'
import { ipcrSubmissionModule } from '../assets/assets.js'
import { CheckIcon, CrossIcon, Folder } from 'lucide-react'

const IpcrSubmission = () => {

    const [submission, setSubmission] = useState(null)
    const open = "You can now Upload your IPCR file. Deadline "
    const close = "The submission period ended on "
    const submissionStatus = submission?.status == 'open'

    useEffect(() => {
        setSubmission(ipcrSubmissionModule[0])
    },[])

    return (
        <div className='p-15'>
            <div className={`w-full p-10 rounded-2xl mb-5 shadow-sm border-2 ${submissionStatus ? "bg-green-200 border-green-600" : "bg-red-200 border-red-600"}`}>
                <p className={`text-3xl font-medium ${submissionStatus ? 'text-green-600' : 'text-red-600'}`}>Submission is {submissionStatus ? "Open" : "Closed"}</p>
                <p className='text-lg'>{submissionStatus ? open : close} {submission?.end_date}</p>
            </div>
            <div className='flex gap-4 mb-5'>
                <div className={`flex flex-col gap-7 bg-white p-10 shadow-sm flex-65 rounded-2xl border-2 ${submissionStatus ? 'border-green-600' : 'border-red-600'}`}>
                    <div className='flex gap-5'>
                        <Folder className='w-15 h-15'/>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-medium'>IPCR Submission</h2>
                            <div className='flex items-center gap-8'>
                                <p className='text-xl font-medium'>1st Semester 2026</p>
                                <p className={`rounded-full px-3 py-2 text-xl font-medium ${submissionStatus ? 'bg-green-200 text-green-600 border-2' : 'bg-red-200 text-red-600 border-2'}`}>{submission?.status}</p>
                            </div>
                            <p className='text-xl'>Submission Period: {submission?.start_date} - {submission?.end_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='bg-white shadow-md border-2 w-120 h-70 rounded-2xl p-5 overflow-y-auto'>
                            <h2 className='text-xl font-medium mb-5'>Instuctions: </h2>
                            <p className='text-lg'>{submission?.note}</p>
                        </div>
                        <div className='bg-white shadow-md border-2 w-70 h-70 rounded-2xl'></div>
                    </div>
                </div>
                <div className='bg-white shadow-sm flex-35 rounded-2xl p-5'>
                    <h2 className='text-2xl font-medium mb-5'>My Submission Status</h2>
                    <hr />
                    <div className='flex justify-between p-5 bg-[#ede8e8] my-2 rounded-2xl'>
                        <p className='text-xl'>IPCR {submission?.quarter} {submission?.year}</p>
                        <p className='text-red-600 font-medium px-3 py-1 bg-red-300 rounded-full'>Not Submitted</p>
                    </div>
                    <div className='flex justify-between p-5 bg-[#ede8e8] my-2 rounded-2xl'>
                        <p className='text-xl'>IPCR {submission?.quarter} {submission?.year}</p>
                        <p className='text-lg'>N/A</p>
                    </div>
                </div>
            </div>
            <div className='bg-cyan-400 w-full rounded-2xl'>
                <h2 className='text-2xl font-medium p-5'>Proress Bar</h2>
            </div> 
        </div>
    )
}

export default IpcrSubmission
