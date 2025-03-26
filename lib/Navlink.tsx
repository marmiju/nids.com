import Link from 'next/link'
import React from 'react'

export const Navlink = () => {

    const link = <>
        <Link href={'/'}>Home</Link>
        <Link href={'/register'}>LogIn</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/login'}>LogIn</Link>
    </>
    return link

}
