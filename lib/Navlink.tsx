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
        { path: '/admission', name: 'Addmission' },
        { path: '/event', name: 'Event' },
        { path: '/about', name: 'About' },
        { path: '/student', name: 'Student' },
    ]
    return link

}
