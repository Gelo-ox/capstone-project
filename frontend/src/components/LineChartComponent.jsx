import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const LineChartComponent = () => {

    const data = [
        {name: 'June 1', react: 2, angular: 37, vue: 60},
        {name: 'June 2', react: 1, angular: 42, vue: 54},
        {name: 'June 3', react: 5, angular: 41, vue: 54},
        {name: 'June 4', react: 0, angular: 37, vue: 28},
        {name: 'June 5', react: 1, angular: 31, vue: 27},
        {name: 'June 6', react: 3, angular: 44, vue: 49},
        {name: 'June 7', react: 7, angular: 31, vue: 42},
        {name: 'June 8', react: 5, angular: 27, vue: 50},
        {name: 'June 9', react: 2, angular: 35, vue: 43},
        {name: 'June 10', react: 6, angular: 36, vue: 51},
    ]

    return (
        <LineChart className='bg-white shadow-sm rounded-2xl p-10' width={800} height={400} data={data}>
            <Line type="monotone" dataKey="react" stroke='#2196FE' strokeWidth={3}></Line>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
        </LineChart>
    )
}

export default LineChartComponent
