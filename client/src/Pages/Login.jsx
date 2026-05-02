import React from 'react'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
function Login() {
    return (

        <div className='min-h-screen bg-gray-100 '>

            <Navbar/>
                

            <div className=' flex justify-center items-center px-4 py-6'>
                
                <div className='w-full max-w-md bg-white p-4 sm:p-6 border rounded-2xl'>


                    <h1 className=' text-2xl sm:text-3xl font-semibold mb-5 text-center '>Login </h1>
                    <div>
                        <label className='block text-sm font-medium mb-2 '>Email</label>
                        <input type="email" placeholder='Enter Your Email' className='w-full px-3 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ' />
                    </div>

                    <div>
                        <label htmlFor="Password " className='block text-sm font-medium mb-2'> Password</label>
                        <input type="password" placeholder='Enter Your Password' className='w-full px-3 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ' />
                    </div>

                    <div className=' py-5'>
                        <button className='w-full bg-blue-400 hover:bg-blue-600 text-white py-3 border rounded-lg text-xl'>Login </button>
                    </div>

                    <p className=' text-base sm:text-lg '>Don't have an Account ? <Link  to="/signup" className='text-blue-500  '>Please Signup </Link></p>
                </div>
            </div>

        </div>
    )
}

export default Login
