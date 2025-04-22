'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { Mobile } from './Mobile';
import { MdManageAccounts, MdOutlineAccountCircle } from 'react-icons/md';
import { useAuth } from '@/utils/auth';
import { Desktop } from './Desktop';
import { Navlink } from '@/lib/Navlink';


const header = () => {
    const [isopen, setIsOpen] = useState(false)
    const islogged = useAuth()
    const navlink = Navlink()
    return (
        <div className=' p-6 flex justify-end max-w-[1200px] mx-auto text-black'>
            {/* for Mobile */}
            <Mobile navs={navlink} />

            {/* for desktop or tablate */}
            <Desktop navs={navlink} />
            <div className="relative flex justify-end text-3xl gap-4">
                {/* Profile  */}
                <div
                    className="hover:cursor-pointer pr-2 flex justify-center  shadow-2xl"
                    onClick={() => setIsOpen(!isopen)}
                >
                    {islogged ? <MdManageAccounts /> : <MdOutlineAccountCircle />}
                </div>

                {/* Dropdown Menu */}
                <div className={`absolute m-4  right-0 text-sm font-medium gap-2 rounded   mt-10 shadow-xl border-gray-300 py-2  border  bg-white  overflow-hidden  ${isopen ? 'grid' : 'hidden'} `}>
                    {islogged ? (
                        <>
                            <Link className="backdrop-blur-md  text-black px-4 block" href={'profile'}>U'r_Profile</Link>
                            <div className=" hover:cursor-pointer text-red-900 px-4 p-1 block">Log Out</div>
                        </>
                    ) : (
                        <>
                            <Link className="backdrop-blur-md hover:cursor-pointer px-4 p-1 block" href={'login'}>Log in</Link>
                            <Link className="backdrop-blur-md hover:cursor-pointer px-4 p-1 block" href={'register'}>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default header