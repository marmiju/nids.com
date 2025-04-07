// ✅ page.tsx or page.jsx (React Component)
import { Users, usersType, usertype } from '@/lib/users/Users'
import React from 'react'

const Page = async () => {
    const UserData: usersType = await Users()
    console.log(UserData)

    return (
        <div>
            {
                UserData.map((data: usertype) => (
                    <div key={data.id}>
                        <h1>{data.name}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Page;
