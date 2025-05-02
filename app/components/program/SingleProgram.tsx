import { program } from '@/lib/about/AboutData';
import React from 'react';
type props ={
    program:program
}

const Singleprogram:React.FC<props> = ({program}) => {
    return (
        <div className='bg-gray-100 shadow border hover:scale-105  transition-all duration-500 border-gray-100-50 rounded-2xl'>
            <img className='overflow-hidden rounded-t-2xl bg-cover' src={program.image} alt={program.title} />
            <div className='p-4'>
            <p className='text-xl md:text-2xl font-bold border-b border-gray-200'>{program.title}</p>
            <p>{program.slogan}</p>
            <p>{program.desc}</p>
            </div>
             
        </div>
    );
};

export default Singleprogram;