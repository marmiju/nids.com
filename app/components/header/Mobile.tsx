'use client'
import { Navlink, navprop } from '@/lib/Navlink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";



export const Mobile: React.FC<navprop> = ({ navs }) => {
    const [isOpen, setIsOpen] = useState(false)
    const path = usePathname()

    function handledrawer() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='md:hidden z-50'>
            <div className=' flex justify-between text-4xl m-2 '>
                <div onClick={handledrawer}>
                    {
                        <HiMenuAlt2 className={`${isOpen ? 'color-orange rounded' : ''}`} />
                    }
                    <div className={`${isOpen ? '' : '-ml-40'} absolute text-sm transition-all duration-300 grid gap-2 m-2 rounded bg-gray-200 overflow-ellipsis border-1 border-[#ececec71] shadow-2xl`}>
                        {
                            navs.map((data, i) => {
                                return <Link
                                    key={i}
                                    className={`${data.path == path ? 'bg-gray-800 color-orange   text-white   text-sm ' : ''} p-1 px-4 `}
                                    href={data.path}>⨀  {data.name}</Link>
                            })
                        }
                    </div>
                </div>

            </div>


        </div>
    )
}
