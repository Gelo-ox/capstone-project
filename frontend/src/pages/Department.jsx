import React, { useState, useContext, useEffect } from 'react'
import { icons } from '../assets/assets.js'
import AddDepartment from '../components/modals/AddDepartment.jsx'
import axios from 'axios'
import { AuthContext } from '../context/AuthContex.jsx'

const Department = () => {

    const Search = icons.Search
    const Filter = icons.Filter
    const PlusCircle = icons.PlusCircle

    const [departments, setDepartments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const {token} = useContext(AuthContext)

    const fetchDepartments = async () => {
        try {
            const res = await axios.get('http://localhost:3000/department',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(res.data.departments)
            setDepartments(res.data.departments)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        fetchDepartments();
    }, [])
    return (
        <div className='p-10'> 
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl mb-5'>Departments</h2>
                <button onClick={() => setIsOpen(true)} className='flex items-center gap-3 bg-[#31511E] text-white px-3 py-2 rounded-sm cursor-pointer hover:bg-green-800'>
                    <PlusCircle/>
                    Add new Department
                </button>
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
                    <table className='w-full overflow-auto border'>
                        <thead>
                            <tr className='bg-gray-200 p-10'>
                                <th className='p-3 border'>Department Name</th>
                                <th className='p-3 border'>College</th>
                                <th className='p-3 border'>Head</th>
                                <th className='p-3 border' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                departments.map(department => (
                                    <tr className='hover:bg-gray-100 border'>
                                        <td className='p-4 border'>{department.department_name}</td>
                                        <td className='p-4 border'>{department.college_id}</td>
                                        <td className='p-4 border'>{`${department.first_name} ${department.last_name}`}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* add department modal */}
            {
                isOpen && <AddDepartment onClose={() => setIsOpen(false)}/>
            }
        </div>
    )
}

export default Department
