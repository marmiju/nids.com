// ✅ /lib/users/Users.ts
export type usersType = usertype[]

export type usertype = {
    id: number
    name: string
    username: string
    email: string
    phone: string
    password: string
    role: string
    status: string
    semester: string
    result: any
    contestPoints: number
    rank: any
    createdAt?: string
}

export type userprop = {
    data: usersType
}

export const Users = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: "student" }),
    });

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const data = await response.json()
    return data.result
}
