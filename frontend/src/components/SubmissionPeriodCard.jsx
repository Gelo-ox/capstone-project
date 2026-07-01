import React, { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'
import { ipcrSubmissionModule } from '../assets/assets'

const SubmissionPeriodCard = () => {

    const [submission, setSubmission] = useState(null)
    const submissionStatus = submission?.status == 'open'

    useEffect(() => {
        setSubmission(ipcrSubmissionModule[0])
    },[])

    console.log()

    return (
        <div className='inline-flex p-2 rounded-2xl bg-white shadow-sm gap-7 items-center mb-5'>
            <div>
                <Calendar className='w-5 h-5'/>
            </div>
            <div>
                <p className='font-medium text-md'>Submission Period</p>
                <p className='text-sm'>{submission?.start_date} - {submission?.start_date}</p>
            </div>
            <div>
                <p className={`px-2 py-1 rounded-full text-sm font-medium ${submissionStatus ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>{submission?.status}</p>
            </div>
        </div>
    )
}

export default SubmissionPeriodCard
