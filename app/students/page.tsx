
import { Users, usersType, usertype } from '@/lib/users/Users'
import React, { useState } from 'react'
import { UserCart } from '../components/userCart/UserCart'

const Page = async () => {
    const UserData = await Users()
    console.log(UserData)

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-2'>
                {
                    UserData.map((data: usertype) => (
                        <UserCart key={data.id} data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Page;
