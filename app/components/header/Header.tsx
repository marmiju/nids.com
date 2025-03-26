'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import { Mobile } from './Mobile';
import { MdManageAccounts, MdOutlineAccountCircle } from 'react-icons/md';
import { useAuth } from '@/utils/auth';
import { Desktop } from './Desktop';




const header = () => {
    const [isopen, setIsOpen] = useState(false)
    const islogged = useAuth()

    return (
        <div className='m-4 flex justify-between'>
            {/* for Mobile */}
            <Mobile />
            {/* for desktop or tablate */}
            <Desktop />
            <div className="relative flex justify-end text-3xl gap-4">
                {/* Profile Icon */}
                <div
                    className="hover:cursor-pointer"
                    onClick={() => setIsOpen(!isopen)}
                >
                    {islogged ? <MdManageAccounts /> : <MdOutlineAccountCircle />}
                </div>

                {/* Dropdown Menu */}
                <div className={`absolute right-0 text-sm font-medium gap-0.5 rounded  mt-10 shadow border border-white  overflow-hidden  ${isopen ? 'grid' : '-mr-64'} transition-all  duration-200 `}>
                    {islogged ? (
                        <>
                            <Link className="backdrop-blur-md hover:bg-white  p-1 block" href={'profile'}>U'r_Profile</Link>
                            <div className=" backdrop-blur-md hover:bg-white p-1 block">Log Out</div>
                        </>
                    ) : (
                        <>
                            <Link className="backdrop-blur-md hover:bg-white p-1 block" href={'login'}>Log in</Link>
                            <Link className="backdrop-blur-md hover:bg-white p-1 block" href={'register'}>Register</Link>
                        </>
                    )}
                </div>
            </div>



        </div>
    )
}

export default header