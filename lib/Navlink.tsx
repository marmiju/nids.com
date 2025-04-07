import Link from 'next/link'
import React from 'react'

export type Navtype = nav[]

export type nav = {
    path: string,
    name: string
}
export type navprop = {
    navs: Navtype
}

export const Navlink = () => {

    const link = [
        { path: '/', name: 'home' },
        { path: '/event', name: 'Event' },
        { path: '/notice', name: 'Notice' },
        { path: '/about', name: 'About' },
        { path: '/students', name: 'Students' },
        { path: 'http://app11.nu.edu.bd/', name: 'Addmission' },
    ]
    return link

}
