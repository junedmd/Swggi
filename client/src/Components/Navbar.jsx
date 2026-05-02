import React, { useState } from 'react';
import { PiCaretDownBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    };
    const hideSideMenu = () => {
        setToggle(false)
    }

    const links = [
        {
            icon: <CiSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "New"
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "Sign In",
            path: "/signup"
        },
        {
            icon: <MdOutlineShoppingCart />,
            name: "Cart",
            sup: "2"
        }
    ]
    return (
        <>
            <div className='fixed inset-0 bg-black/50 z-40 duration-300 ' onClick={hideSideMenu} 
            style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden" }} >

            </div>

            {/* sidebar(mobile)  */}

            <div className='fixed top-0 left-0 h-full w-[70%] max-w-75 bg-white z-50 duration-300' style={{ transform: toggle ? "translateX(0%)" : "translateX(-100%)" }}>

            <div className='p-5'>
                <h2 className='text-xl font-bold mb-5'> Menu</h2>

                <ul className='flex flex-col gap-6 text-lg'>
                    {
                        links.map((link,index)=>(
                            <li key={index}>
                                {link.path? (
                                    <Link to={link.path}
                                    onClick={hideSideMenu}
                                    className='flex items-center gap-3 hover:text-[#fc8019]'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </Link>
                                ):(
                                     <div className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                        {link.icon}
                                        {link.name}
                                        <sup>{link.sup}</sup>
                                    </div>
                                )}

                            </li>

                        ))
                    }
                    
                </ul>

            </div>
        </div>

        {/* navbar */}
            <div className='p-4 shadow-md text-[#686b78] bg-white'>
                <div className='max-w-300 mx-auto  flex items-center'>

                    <div className='w-20 md:w-24'>
                        <Link to="/"> <img src="images/logo1.png" alt="logo" className='w-full' /></Link>
                        
                    </div>
                    <div className='ml-3 text-sm md:text-base'>
                        <span className='font-bold border-b-[3px] border-[black] '>Retanda</span> Jodhpur , Rajasthan India. <PiCaretDownBold onClick={showSideMenu} fontSize={20} className='font-bold inline text-[#fc8019] cursor-pointer' />
                    </div>

                        {/* mobile menu icon */}
                    <div className='ml-auto md:hidden cursor-pointer' onClick={showSideMenu}>
                        <HiMenu size={24}/>
                    </div>

                        {/* desktop menu */}
                    <nav className=' hidden md:flex list-none gap-8 ml-auto font-semibold text-[16px] lg:text-[18px]'>
                        {
                            links.map((link, index) => {
                                return (
                                    <>
                                        <li key={index}>
                                            {link.path ? (
                                                <Link to={link.path} className='flex items-center gap-2 hover:text-[#fc8019]'>
                                                    {link.icon}
                                                    {link.name}
                                                    <sup>{link.sup}</sup>
                                                </Link>
                                            ) : (
                                                <div className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                                                    {link.icon}
                                                    {link.name}
                                                    <sup>{link.sup}</sup>
                                                </div>
                                            )}
                                        </li>
                                    </>
                                )
                            })
                        }
                    </nav>
                </div>

            </div>
        </>
    )
}

