import React from 'react';
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import dotenv from "dotenv";
const API = import.meta.env.VITE_API_URL;

export default function Category() {

    const [slide, setSlide]=useState(1);

    const [data, setData] = useState([]);


    

    const fetchCategories = async () => {
        try {
            const response = await axios(`${API}/api/categories`);
            setData(response.data.data);
            console.log(response.data.data);
        } catch (e) {
            console.log(e.error)
        }

    };

    useEffect(() => {
        fetchCategories();
    }, [])

    const nextSlide=()=>{
        console.log(data.length);

        if(data.length-6 == slide)return false;
        setSlide(slide + 1);

        

    };
    const preSlide=()=>{

        if(slide==0) return false;
        setSlide(slide - 1);
     

    }


    return (
        <div className='max-w-300 mx-auto'>
            <div className='flex my-3 items-center justify-between'>


                <div className='text-3xl'>
                    What's on Your Minds?
                </div>
                <div className='flex my-3 '>
                    <div className=' flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2' onClick={preSlide} >
                        <FaArrowLeft  />
                    </div>
                    <div className='flex justify-center items-center w-7.5 h-7.5 bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight />
                    </div>

                </div>




            </div>
            <div className='flex  p-2 overflow-hidden'>
                {
                    data.map((item) => {
                        return (
                            <div style={{transform:`translateX(-${slide * 100}%)`}}  key={item._id} className="min-w-50 ">
                                <img src={item.image}  className='w-50 h-50 object-cover  mx-auto' />
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )

}
