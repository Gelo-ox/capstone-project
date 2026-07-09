import React, { useState, useContext, useEffect } from 'react'
import {icons} from '../../assets/assets.js'
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContex.jsx';
import axios from 'axios';

const AddDepartment = ({onClose}) => {

    const [departmentName, setDepartmentName] = useState("");
    const [college, setCollege] = useState("");
    const [departmentHead, setDepartmentHead] = useState("") 
    const [heads, setHeads] = useState([])
    const {token} = useContext(AuthContext);
    const X = icons.X

    const fetchDepartmentHeads = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user/users',
                {
                    params: {
                        role: "Department Head"
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setHeads(res.data.users)
        } catch (error) {
            console.log(error.response)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(departmentHead)
        console.log(departmentName)
        console.log(college)

        if(!departmentName.trim() || !college.trim() || !departmentHead.trim()){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
            });
            return 
        }

        try {
            const res = await axios.post('http://localhost:3000/department/addDepartment', {departmentName, departmentHead, college},
                {   
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            
            onClose()
            Swal.fire({
                title: "Department Added!",
                icon: "success",
            });

            console.log(res.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        fetchDepartmentHeads();
    }, [])

    return (
        <div className=' fixed inset-0 bg-black/50'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100  p-4 bg-white shadow-sm rounded-sm'>
                <div className='flex justify-end'>
                    <X onClick={onClose} className='cursor-pointer'/>
                </div>
                <h2 className='font-medium text-lg mb-5'>Add New Department</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-1 mb-3'>
                            <label htmlFor="firstName"className='text-sm text-[#797979]'>Department Name</label>
                            <input onChange={(e) => setDepartmentName(e.target.value)} id='firstName' type="text" className='flex-1 border border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                        </div>
                    </div>
                    <div className='flex-1'>
                        
                        <div className='flex-1 flex flex-col gap-1 mb-3'>
                            <label htmlFor="college"className='text-sm text-[#797979]'>College</label>
                            <select onChange={(e) => setCollege(e.target.value)} value={college} className='flex-1 border border-black outline-none rounded-sm px-3 py-2 text-sm'>
                                <option value="">Select College</option>
                                <option value="CEn">College of Engineering</option>
                                <option value="Education">College of Education</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col gap-1 mb-3'>
                            <label htmlFor="department"className='text-sm text-[#797979]'>Department Head</label>
                            <select onChange={(e) => setDepartmentHead(e.target.value)} value={departmentHead} className='flex-1 border border-black outline-none rounded-sm px-3 py-2 text-sm'>
                                <option value="">Select Department Head</option>
                                {
                                    heads.map(head => (
                                        <option key={head.id} value={head.id}>{`${head.first_name} ${head.last_name}`}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className='px-3 py-2 rounded-sm bg-[#31511E] text-white cursor-pointer'>Add Department</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment
