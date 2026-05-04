import React from 'react';
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
   

import dotenv from "dotenv";
const API = import.meta.env.VITE_API_URL;

export default function Category() {

    const [slide, setSlide]=useState(1);

    const [data, setData] = useState([]);
   const scrollRef = useRef(null);

    

    const fetchCategories = async () => {
        try {
            const response = await axios(`https://swggiy-a1kj.onrender.com/api/categories`);
            setData(response.data.data);
            console.log(response.data.data);
        } catch (e) {
            console.log(e.error)
        }

    };

    useEffect(() => {
        fetchCategories();
    }, [])

   


    return (
        <div className='max-w-400 mx-auto'>
            <div className='flex my-3 items-center justify-between'>


                <div className='text-2xl sm:text-2xl pl-5'>
                    What's on Your Minds?
                </div>
                

            </div>
            <div className='flex p-2 overflow-x-auto scroll-smooth' style={{ scrollbarWidth: 'none' }}>
                {
                    data.map((item) => {
                        return (
                            <div   key={item._id} className="min-w-25 sm:min-w-50 ">
                                <img src={item.image}  className='w-30 sm:w-39 sm:h-50 h-37 object-cover  mx-auto' />
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )

}
