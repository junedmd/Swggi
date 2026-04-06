import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Category() {
  return (
    <div className='max-w-300 mx-auto'>
        <div className='flex my-3 items-center justify-between'>

       
        <div className='text-3xl'>
            What's on Your Minds?
        </div>
        <div className='flex my-3 '>
            <div className=' flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2'>
                <FaArrowLeft />
            </div>
            <div className='flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2'>
                    <FaArrowRight />
            </div>

        </div>
       </div>
    </div>
  )

}
