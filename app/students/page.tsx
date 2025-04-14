'use client'

import { Users, usersType, usertype } from '@/lib/users/Users'
import React, { useEffect, useState } from 'react'
import { UserCart } from '../components/userCart/UserCart'
import StudentSearch from '../components/serchBar/StudentSearch'

const Page = () => {
    const [userData, setUserData] = useState<usersType>([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await Users()
            setUserData(data)
        }
        fetchUsers()
    }, [])

    const filteredUsers = userData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.semester.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <StudentSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-2'>
                {filteredUsers.length > 0 ? filteredUsers.map((data: usertype) => (
                    <UserCart key={data.id} data={data} />
                )) : ' Not Found'}
            </div>
        </div>
    )
}

export default Page
