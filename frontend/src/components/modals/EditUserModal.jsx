import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { icons } from '../../assets/assets.js'
import { AuthContext } from '../../context/AuthContex.jsx'

const EditUserModal = ({onClose, onUserAdded, user}) => {
    const X = icons.X

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [college, setCollege] = useState("")
    const [department, setDepartment] = useState("")
    const [roles, setRoles] = useState([])
    const {token} = useContext(AuthContext)

    const hasChanges = firstName !== user.first_name ||
                        lastName !== user.last_name ||
                        email !== user.email ||
                        JSON.stringify(roles) !== JSON.stringify(user.role);

    useEffect(() => {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setCollege(user.college_id);
        setDepartment(user.department_id);
        setRoles(user.role);
    },[user])

    const handleChangeRole = (e) => {
        const { value, checked } = e.target;

        if(checked){
            setRoles(prev => [...prev, value])
        }else{
            setRoles(prev => prev.filter(role => role !== value))
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!firstName || !lastName || !email || !college || !department || !roles){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
            });
            return;
        }

        try {
            const res = await axios.patch(`http://localhost:3000/user/update/${user.id}`, {firstName, lastName, email, college, department, roles},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            onUserAdded()
            onClose()
            Swal.fire({
                title: "User Updated!",
                icon: "success",
            });

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' fixed inset-0 bg-black/50'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-200  p-4 bg-white shadow-sm rounded-sm'>
                    <div className='flex justify-end'>
                        <X onClick={onClose} className='cursor-pointer'/>
                    </div>
                    <h2 className='font-medium text-lg mb-5'>Edit User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-between gap-5'>
                            <div className='flex-1'>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor="firstName"className='text-sm text-[#797979]'>First Name</label>
                                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} id='firstName' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                                </div>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor="lastName"className='text-sm text-[#797979]'>Last Name</label>
                                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} id='lastName' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                                </div>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor="email"className='text-sm text-[#797979]'>Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} id='email' type="email" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                                </div>
                                {/* <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor="username"className='text-sm text-[#797979]'>Username</label>
                                    <input onChange={(e) => setUsername(e.target.value)} id='username' type="text" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                                </div>
                                <div className='flex flex-col gap-1 mb-3'>
                                    <label htmlFor="password"className='text-sm text-[#797979]'>Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} id='password' type="password" className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'/>
                                </div> */}
                            </div>
                            <div className='self-stretch w-0.5 bg-gray-400'></div>
                            <div className='flex-1'>
                                
                                    <div className='flex-1 flex flex-col gap-1 mb-3'>
                                        <label htmlFor="college"className='text-sm text-[#797979]'>College</label>
                                        <select onChange={(e) => setCollege(e.target.value)} value={college} className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'>
                                            <option value="">Select College</option>
                                            <option value="CEn">College of Engineering</option>
                                            <option value="Education">College of Education</option>
                                        </select>
                                    </div>
                                    <div className='flex-1 flex flex-col gap-1 mb-3'>
                                        <label htmlFor="department"className='text-sm text-[#797979]'>Department</label>
                                        <select onChange={(e) => setDepartment(e.target.value)} value={department} className='flex-1 border-1 border-black outline-none rounded-sm px-3 py-2 text-sm'>
                                            <option value="">Select Department</option>
                                            <option value="BSIT">BSIT</option>
                                            <option value="BSCE">BSCE</option>
                                            <option value="BSABE">BSABE</option>
                                        </select>
                                    </div>
                                
                                <div className=''>
                                    <p className='font-medium text-lg'>Roles</p>
                                    <div className='flex flex-col gap-3'>
                                        <label className='flex gap-2 items-center text-sm font-medium'>
                                            <input type="checkbox" onChange={handleChangeRole} value="Department Head" checked={roles.includes("Department Head")}/>
                                            Department Head
                                        </label>
                                        <label className='flex gap-2 items-center text-sm font-medium'>
                                            <input type="checkbox" onChange={handleChangeRole} value="Dean" checked={roles.includes("Dean")}/>
                                            Dean
                                        </label>
                                        <label className='flex gap-2 items-center text-sm font-medium'>
                                            <input type="checkbox" onChange={handleChangeRole} value="Director" checked={roles.includes("Director")}/>
                                            Director
                                        </label>
                                        <label className='flex gap-2 items-center text-sm font-medium'>
                                            <input type="checkbox" onChange={handleChangeRole} value="Chief" checked={roles.includes("Chief")}/>
                                            Chief
                                        </label>
                                        <label className='flex gap-2 items-center text-sm font-medium'>
                                            <input type="checkbox" onChange={handleChangeRole} value="Staff" checked={roles.includes("Staff")}/>
                                            Staff
                                        </label>
                                        <label className='flex gap-2 items-center text-sm font-medium'>
                                            <input type="checkbox" onChange={handleChangeRole} value="VP" checked={roles.includes("VP")}/>
                                            VP
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end gap-5 mt-5'>
                            <button disabled={!hasChanges}  className={`${hasChanges ? "bg-[#31511E] cursor-pointer" : "bg-gray-400 cursor-not-allowed"} px-3 py-2 rounded-sm  text-white`}>Edit User</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default EditUserModal
