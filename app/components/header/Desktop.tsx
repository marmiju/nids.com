'use client'
import { Navlink } from '@/lib/Navlink'
import { useAuth } from '@/utils/auth'
import Rrafceact from 'react'
import { MdAccountCircle, MdOutlineAccountCircle } from 'react-icons/md'

export const Desktop = () => {

    return (
        <div className='flex justify-between w-full'>
            <div className='  hidden md:flex justify-between max-w-[1200px] mx-auto'>
                <div className='gap-2 space-x-2'>
                    <Navlink />
                </div>
            </div>

        </div>

    )
}
