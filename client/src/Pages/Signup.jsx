import React from 'react'
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
function Signup() {
    return (

        <div className='min-h-screen bg-gray-100 '>

        <Navbar/>
        <div className=' box-border flex justify-center items-center px-2 py-2 '>

            <div className='w-80% sm:w-full max-w-md bg-white p-5 sm:p-8 border rounded-2xl sm:rounded-2xl shadow-md'>


                <h1 className=' text-xl sm:text-3xl text-center sm:mb-1'>Signup</h1>


                <div className=' '>


                    <div className=' '>
                        <label className='block text-sm font-medium mb-1'  >Name</label>
                        <input type="text" className='w-full px-3 py-1 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base' placeholder=' Write Your name ' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1 '> Email </label>
                        <input type="email" placeholder=' Write Your Email' className=' w-full px-3 py-1 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>

                    <div>
                        <label htmlFor="Number" className='block text-sm font-medium mb-1'>Mobile Number</label>
                        <input type="tel" placeholder="Enter Your Mobile Number" className='w-full py-1 sm:py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ' />
                    </div>

                    <div>
                        <label htmlFor="Password" className=' block text-sm font-medium mb-1'>Password</label>
                        <input type="password" placeholder=' Enter Your Password' className=' w-full px-3 py-1 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>
                </div>
                <div className='py-5'>
                    <button className=' w-full border py-1 sm:py-2 rounded-2xl bg-blue-400 text-white hover:bg-blue-600 transition duration-200 cursor-pointer text-base  sm:text-lg'>Signup </button>
                </div>


            <p className=' text-sm sm:text-base text-cente'>Already Have an Account? <Link to="/login" className='text-blue-500'> Login Here </Link> </p>
            </div>
        </div>
        </div>
    )
}

export default Signup
