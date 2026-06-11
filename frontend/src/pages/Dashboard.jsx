import React from 'react'
import SubmissionPeriodCard from '../components/SubmissionPeriodCard.jsx'
import StatsCard from '../components/StatsCard.jsx'
import PieChartComponent from '../components/PieChartComponent.jsx'
import LineChartComponent from '../components/LineChartComponent.jsx'
import RecentlySubmitted from '../components/RecentlySubmitted.jsx'

const Dashboard = () => {
    return (
        <div className='p-10' >
            <div className='flex justify-between'>
                <h2 className='font-bold text-5xl'>Dashboard</h2>
                <SubmissionPeriodCard/>
            </div>
            <div className='mb-10'>
                <StatsCard/>
            </div>
            <div className='flex justify-around mb-10'>
                <PieChartComponent/>
                <LineChartComponent/>
            </div>
            <div>
                <RecentlySubmitted/>
            </div>
        </div>
    )
}

export default Dashboard
