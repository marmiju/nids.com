import React from 'react'

export type deveType =  singledevType[]

type singledevType =  {
    title: string,
    icons: string,
    url:string
}

export const developer = () => {
    const data = [
        {
            title: 'lkdin',
            icon:'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg',
            url:'https://linkedin.com/in/marmijudev'
        },
        {
            title: 'fb',
            icon:'https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg',
            url:'https://facebook.com/marmijudev'
        },
        {
            title: 'gthb',
            icon:'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
            url:'https://github.com/marmiju'
        },
        {
            title: 'ltcd',
            icon:'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
            url:'https://leetcode.com/devmar'
        },
    ]
  return data
}
