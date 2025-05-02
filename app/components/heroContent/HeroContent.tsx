import { Alexender } from '@/lib/fonts/Alexandria'
import { props } from '@/lib/heroData/HeroData'
import React from 'react'

export const HeroContent:React.FC<props> = ({ data }) => {
    return (
        <div className="block text-white space-y-2 w-2/3 mx-auto">
            <h1 className="">Welcome to</h1>
            <h1 className={`text-2xl md:text-4xl font-bold ${Alexender.className}`}>{data.title}</h1>
            <h1 className="text-lg text-gray-200">{data.slogan}</h1>
            <button className=" p-2 rounded-sm bg-black text-white mt-2 hover:text-black hover:bg-white transition-all duration-700 hover:shadow-2xl hove:mt-0  drop-shadow shadow-black">Get Free Consultation</button>
        </div>
    )
}
