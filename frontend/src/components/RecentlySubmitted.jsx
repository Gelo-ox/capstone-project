import React from 'react'

const RecentlySubmitted = () => {
    return (
        <div className='bg-white rounded-2xl shadow-sm p-3'>
            <h2 className='font-bold text-xl mb-3'>Recently Submitted</h2>
            <ul className='flex bg-gray-300 justify-around rounded-2xl p-3 text-sm font-medium'>
                <li>Name</li>
                <li>Role</li>
                <li>Document</li>
                <li>Date Submitted</li>
                <li>Status</li>
            </ul>
        </div>
    )
}

export default RecentlySubmitted
