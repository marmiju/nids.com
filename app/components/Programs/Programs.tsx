import { programs } from '@/lib/about/AboutData';
import React from 'react';
import Singleprogram from '../program/SingleProgram';

type props = {
    programs:programs
}

const Programs:React.FC<props> = ({programs}) => {
    return (
        <div
 
  className="max-w-[1200px] mx-auto mt-20 space-y-6 p-[5%]  grid"
>
<div className=' w-full  grid justify-center '>
<p className='text-center text-2xl md:text-3xl lg:text-4xl font-bold  '>{programs.title}</p>
<p className='text-center' >{programs.desc}</p>
</div >
<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{
    programs.program.map((data,index)=>{
        return <Singleprogram key={index} program={data}></Singleprogram>
    })
}
</div>

</div>
    );
};

export default Programs;