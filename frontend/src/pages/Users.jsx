import React, { useEffect, useState, useContext } from 'react'
import { icons, ipcrModule, users, } from '../assets/assets.js'
import Swal from 'sweetalert2'
import AddUserModal from '../components/modals/AddUserModal.jsx'
import EditUserModal from '../components/modals/EditUserModal.jsx'
import { AuthContext } from '../context/AuthContex.jsx'
import axios from 'axios'

const ForReview = () => {

    const Search = icons.Search
    const Filter = icons.Filter
    const PlusCircle = icons.PlusCircle

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [isEditOpen, setEditIsOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [ipcr, setIPCR] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const {token} = useContext(AuthContext)


    const fetchAllUsers = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user/users', 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setAllUsers(res.data.users)
        } catch (error) {
            console.log(error)
        } 
    }

    const handleEdit = (user) => {
        setEditIsOpen(true)
        setSelectedUser(user)
    }

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "delete"
        });

        if(!result.isConfirmed) return

        try {
            const res = await axios.delete(`http://localhost:3000/user/delete/${id}`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            fetchAllUsers()
            Swal.fire({
                title: "User Deleted!",
                icon: "success",
                draggable: false
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllUsers()
    },[])
    
    return (
        <div className='p-10'> 
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-4xl mb-5'>Users</h2>
                <button onClick={() => setIsAddOpen(!isAddOpen)} className='flex items-center gap-3 bg-[#31511E] text-white px-3 py-2 rounded-sm cursor-pointer hover:bg-green-800'>
                    <PlusCircle/>
                    Add new User
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
                                <th className='p-3 border'>Name</th>
                                <th className='p-3 border'>Department</th>
                                <th className='p-3 border'>College</th>
                                <th className='p-3 border'>Status</th>
                                <th className='p-3 border'>Roles</th>
                                <th className='p-3 border'>IPCR Status</th>
                                <th className='p-3 border' colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map(user => (
                                    <tr key={user.id} className='hover:bg-gray-100 border'>
                                        <td className='p-4 border'>{user.first_name} {user.last_name}</td>
                                        <td className='p-4 border'>{user.department_id}</td>
                                        <td className='p-4 border'>{user.college_id}</td>
                                        <td className='p-4 border'>active</td>
                                        <td className='p-4 border'>{user.role.join(", ")}</td>
                                        <td className='p-4 border'>Submitted</td>
                                        <td className='text-center'>
                                            <button onClick={() => handleEdit(user)} className='bg-blue-600 px-5 py-1 text-white rounded-full cursor-pointer'>Edit</button>
                                        </td>
                                        <td className='text-center'>
                                            <button onClick={() => handleDelete(user.id)} className='bg-red-600 px-5 py-1 text-white rounded-full cursor-pointer'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
            {/* Add User modal */}
            {
                isAddOpen && <AddUserModal onClose={() => setIsAddOpen(false)} onUserAdded={fetchAllUsers}/>
            }

            {
                isEditOpen && <EditUserModal onClose={() => setEditIsOpen(false)} onUserAdded={fetchAllUsers} user={selectedUser}/>
            }
            
            
        </div>
    )
}

export default ForReview
