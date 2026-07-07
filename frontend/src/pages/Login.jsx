import React, { useState, useContext } from 'react'
import { User2 } from 'lucide-react'
import {images} from '../assets/assets.js'
import axios from 'axios'
import Swal from 'sweetalert2'
import { AuthContext } from '../context/AuthContex.jsx'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const {login, user} = useContext(AuthContext);
        
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!username || !password){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
            });
            return;
        }

        try {
            const res = await axios.post('http://localhost:3000/auth/login', {username, password})
            login(res.data.user, res.data.token)

            navigate(from, {replace: true})
        } catch (error) {
            if(error.response){ 
                if(error.response.data.message == "Invalid Password!"){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Invalid Password",
                    });
                }else if(error.response.data.message == "User doesn't exist!"){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "User doesn't exist",
                    });
                }else{
                    console.log(error.response.data.message)
                }
            }else{
                console.log(error)
            }
            
        }
    }

    return (
        !user ? 
            <div className='flex justify-center items-center bg-[#31511E] h-screen'>
                <div className='bg-white rounded-xl w-100 pb-7'>
                    <div className='flex flex-col gap-2 items-center mt-10'>
                        <h2 className='text-3xl font-medium text-center text-[#31511E]'>Sign In</h2>
                        <div className='w-15 h-1 bg-[#31511E] rounded-full'></div>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col mt-10 gap-7'>
                        <label htmlFor='username' className='flex items-center bg-[#eaeaea] w-75 m-auto h-12 rounded-sm'>
                            <img src={images.userIcon} className='w-5 h-5 mx-5' />
                            <input onChange={(e) => setUsername(e.target.value)} id='username' type="text" placeholder='Username' autoComplete='off' className='self-stretch flex-1 outline-none border-none bg-transparent text-[#797979] text-md'/>
                        </label>
                        <label htmlFor='password' className='flex items-center bg-[#eaeaea] w-75 m-auto h-12 rounded-sm'>
                            <img src={images.passwordIcon}  className='w-5 h-5 mx-5'/>
                            <input onChange={(e) => setPassword(e.target.value)} id='password' type="password" placeholder='Password' autoComplete='off' className='self-stretch flex-1 outline-none border-none bg-transparent text-[#797979] text-md'/>   
                        </label>
                        <div className='text-center mt-7 text-sm'>
                            Forgot Password? <span className='cursor-pointer underline'>CLick here!</span>
                        </div>
                        <div className='mt-10 text-center'>
                            <button className='bg-[#31511E] px-7 py-2 rounded-full text-lg cursor-pointer hover:bg-green-800 text-white font-medium'>Sign In</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        : <Navigate to={from} replace/>
    )
}

export default Login
