import { programs } from '@/lib/about/AboutData';
import React from 'react';

type props = {
    programs:programs
}

const Programs:React.FC<props> = ({programs}) => {
    return (
        <div
  style={{ width: `calc(100% - 200px)` }}
  className="mx-auto mt-20   grid"
>
<div className=' w-full  grid justify-center '>
<p className='text-center text-2xl md:text-3xl lg:text-4xl font-bold  '>{programs.title}</p>
<p className='text-center' >{programs.desc}</p>
</div>
</div>
    );
};

export default Programs;