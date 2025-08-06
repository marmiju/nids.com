// ✅ /lib/users/Users.ts


export interface usertype  {
    id: number
    name: string
    username: string
    email: string
    phone: string
    password: string
    role: string
    bio:string
    status: string
    designation: string
    image:string
    department:string
    result: string
    contestPoints: number
    rank: string
    createdAt?: string
}


export const Users = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: "teachers" }),
    });

    if (!response.ok) {
        throw new Error('Something went wrong');
    }

    const data = await response.json()
    const user:usertype[] = data.user
    
    return user
}
