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
        { path: 'http://app11.nu.edu.bd/', name: 'Addmission' },
        { path: '/event', name: 'Event' },
        { path: '/about', name: 'About' },
        { path: '/student', name: 'Student' },
        { path: '/notice', name: 'Notice' },
    ]
    return link

}
