import { Contest as contestType } from '@/lib/contest/Contest'
import { timeStamp } from 'console'
import React from 'react'

export const Contest: React.FC<contestType> = ({ id, problems, end_time, }) => {
    const now = new Date()
    const end = new Date(end_time)
    const isExpired = end.getTime() < now.getTime()
    return (
        <div className={`hover:cursor-pointer hover:bg-gray-800 hover:text-white flex text-center shadow text-black p-4 overflow-ellipsis ${isExpired ? 'bg-gray-200' : 'bg-gray-50'} mb-[3px]`}>
            <p className='w-[15%] '>{id}</p>
            <p className={`w-[25%] text-sm ${isExpired ? 'text-red-600' : 'text-green-600'}`}>{isExpired ? 'Expired' : 'running'}</p>
            <p className='w-[20%]'>{problems.length}</p>
            <p className='w-[40%]'>{new Date(end_time).toLocaleString('us-en', { timeZone: 'Asia/Dhaka' })}</p>
        </div>
    )
}
