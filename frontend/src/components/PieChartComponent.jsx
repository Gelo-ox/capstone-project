import React, { useEffect, useState } from 'react'
import {PieChart, Pie, Tooltip, Cell, Legend} from 'recharts'
import {users} from '../assets/assets.js'

const PieChartComponent = () => {

    const [allUsers, setallUsers] = useState([users])
    const colors = ['#2563EB', '#16A34A', '#CA8A04', '#9333EA', '#DC2626']

    const data = [
        {name: 'Not Started', value: 12},
        {name: 'Submitted', value: 10},
        {name: 'For Review', value: 8},
        {name: 'Approved', value: 13},
        {name: 'Late', value: 3}
    ]

    return (
        <PieChart className='bg-white shadow-sm rounded-2xl p-5' width={500} height={300}>
            <Pie data={data} dataKey="value" label>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))}
            </Pie>
            <Tooltip/>
            <Legend/>
        </PieChart>
    )
}

export default PieChartComponent
