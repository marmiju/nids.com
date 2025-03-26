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
            <div className=" grid justify-end  text-3xl gap-4">

                <div>
                    {
                        islogged ? <MdManageAccounts /> : <MdOutlineAccountCircle />
                    }
                </div>
                <div className=' text-sm font-medium gap-0.5 rounded grid border border-gray-100 '>

                    {
                        islogged ? <>
                            <Link className='bg-gray-100 p-1 ' href={'profile'}>U'r_Profile</Link>
                            <div className='bg-gray-100 p-1 ' >Log_Out</div>
                        </>
                            : <>
                                <Link className='bg-gray-100 p-1 ' href={'login'}>Log in</Link>
                                <Link className='bg-gray-100 p-1 ' href={'register'}>Register</Link>
                            </>
                    }



                </div>


            </div>


        </div>
    )
}

export default header