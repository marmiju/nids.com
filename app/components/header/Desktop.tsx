'use client'
import { Navlink, navprop } from '@/lib/Navlink'
import { useAuth } from '@/utils/auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Rrafceact from 'react'
import { MdAccountCircle, MdOutlineAccountCircle } from 'react-icons/md'

export const Desktop: React.FC<navprop> = ({ navs }) => {
    const path = usePathname()

    console.log(path)

    return (
        <div className='flex justify-between w-full'>
            <div className='  hidden md:flex justify-between max-w-[1200px]  mx-auto'>
                <div className='gap-2 space-x-2'>
                    {
                        navs.map((data, i) => {
                            return <Link
                                key={i}
                                target={data.name == 'Addmission' ? '_blank' : '_self'}
                                className={`${data.path == path ? 'bg-gray-800 color-orange text-white p-1 px-4 rounded-full text-sm ' : ''}`}
                                href={data.path}>
                                {data.name}
                            </Link>
                        })
                    }
                </div>
            </div>

        </div>

    )
}
