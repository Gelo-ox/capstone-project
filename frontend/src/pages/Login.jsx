import React, { useState } from 'react'
import { User2 } from 'lucide-react'
import {images} from '../assets/assets.js'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='flex justify-center items-center bg-[#31511E] h-screen'>
            <div className='bg-white rounded-xl w-150 pb-7'>
                <div className='flex flex-col gap-4 items-center mt-10'>
                    <h2 className='text-4xl font-medium text-center text-[#31511E]'>Sign In</h2>
                    <div className='w-15 h-1.5 bg-[#31511E] rounded-full'></div>
                </div>
                <form className='flex flex-col mt-15 gap-10'>
                    <label htmlFor='username' className='flex items-center bg-[#eaeaea] w-100 m-auto h-20 rounded-sm'>
                        <img src={images.userIcon} className='w-8 h-8 mx-5' />
                        <input onChange={(e) => setUsername(e.target.value)} id='username' type="text" placeholder='Username' autoComplete='off' className='self-stretch flex-1 outline-none border-none bg-transparent text-[#797979] text-2xl'/>
                    </label>
                    <label htmlFor='password' className='flex items-center bg-[#eaeaea] w-100 m-auto h-20 rounded-sm'>
                        <img src={images.passwordIcon}  className='w-8 h-8 mx-5'/>
                        <input onChange={(e) => setPassword(e.target.value)} id='password' type="password" placeholder='Password' autoComplete='off' className='self-stretch flex-1 outline-none border-none bg-transparent text-[#797979] text-2xl'/>   
                    </label>
                </form>
                <div className='text-center mt-10 text-md'>
                    Forgot Password? <span className='cursor-pointer underline'>CLick here!</span>
                </div>
                <div className='mt-10 text-center'>
                    <button className='bg-[#31511E] px-10 py-3 rounded-full text-2xl cursor-pointer hover:bg-green-800 text-white font-medium'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Login
