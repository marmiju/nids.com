import React from 'react'

export type dataType = {
    title: string,
    slogan: string,
    link: string,
    img: string
}
export type props = {
    data: dataType
}

export const HeroData = () => {
    const data = {
        title: 'NIDS - Northbengal Institute of Developement  Studies',
        slogan: 'Empowering Minds, Shaping the Future',
        link: 'facebook.com',
        img: 'https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png'
    }
    return data
}
