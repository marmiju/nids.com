import { Contest as contestType } from '@/lib/contest/Contest'
import { timeStamp } from 'console'
import React from 'react'

export const Contest: React.FC<contestType> = ({ title, description, created_at, hosted_by, id, problems, end_time }) => {
    const now = new Date()
    const end = new Date(end_time)
    const isExpired = end.getTime() < now.getTime()
    return (
        <div className='flex text-center shadow text-black bg-gray-50 p-4 mb-0.5 overflow-ellipsis'>
            <p className='w-[15%] '>{id}</p>
            <p className={`w-[25%] text-sm ${isExpired ? 'text-red-600' : 'text-green-600'}`}>{isExpired ? 'Expired' : 'running'}</p>
            <p className='w-[20%]'>{problems.length}</p>
            <p className='w-[40%]'>{new Date(created_at).toLocaleString('us-en', { timeZone: 'Asia/Dhaka' })}</p>
        </div>
    )
}
