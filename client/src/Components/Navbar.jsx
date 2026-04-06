import React, { useState } from 'react';
import { PiCaretDownBold } from "react-icons/pi";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu= ()=>{
            setToggle(true);
    };
    const hideSideMenu=()=>{
        setToggle(false)
    }
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{opacity: toggle?1:0 ,visibility: toggle? "visible":"hidden"}} >

            </div>
            <div className='w-120 bg-white h-full absolute duration-700' style={{left:toggle?"0%":"-100%" }}>

            </div>
            <div className='p-4 shadow-xl text-[#686b78]'>
                <div className='max-w-300 mx-auto border border-red-500 flex items-center'>

                    <div className='w-25'>
                        <img src="images/logo1.png" alt="logo" className='w-full' />
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-[black] '>Retanda</span> Jodhpur , Rajasthan India. <PiCaretDownBold onClick={showSideMenu} fontSize={20} className='font-bold inline text-[#fc8019] cursor-pointer' />
                    </div>
                </div>

            </div>
        </>
    )
}
