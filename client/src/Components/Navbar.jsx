import React, { useState } from 'react';
import { PiCaretDownBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
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
            <div className='black-overlay w-full h-full fixed duration-500 bg-white' onClick={hideSideMenu} style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden" }} >

            </div>
            <div className='w-120 bg-white h-full absolute duration-700' style={{ left: toggle ? "0%" : "-100%" }}>

            </div>
            <div className='p-4 shadow-xl text-[#686b78] bg-white'>
                <div className='max-w-300 mx-auto  flex items-center'>

                    <div className='w-25'>
                        <Link to="/"> <img src="images/logo1.png" alt="logo" className='w-full' /></Link>
                        
                    </div>
                    <div>
                        <span className='font-bold border-b-[3px] border-[black] '>Retanda</span> Jodhpur , Rajasthan India. <PiCaretDownBold onClick={showSideMenu} fontSize={20} className='font-bold inline text-[#fc8019] cursor-pointer' />
                    </div>
                    <nav className=' flex list-none gap-8 ml-auto font-semibold text-[18px]'>
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
