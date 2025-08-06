'use client';
import React, { useState } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import Image from 'next/image';
import avatar from '@/public/avatar.png'
import { usertype } from '@/lib/users/Users';
import PersonalModal from '../../Modal/PersonModal';


const TeacherCard = ({ person }:{person:usertype
}) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div
                className={`${isOpen ? 'block relative' : 'hidden'}`}>
                <PersonalModal person={person} handlemodal={() => setIsOpen(false)} />
            </div>
            <div
                onClick={() => setIsOpen(true)}
                className="relative p-2">
                <div className="border border-secondary bg-secondary rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-300 hover:cursor-pointer group   ">
                    <div className='grid gap-4 mb-1 md:flex'>
                        <Image className='w-full md:w-64 rounded' placeholder='blur' loading="lazy" blurDataURL="data:image/jpeg..." width={400} height={200} src={person.image || avatar} alt={person.name} />
                    </div>
                    <div className='  w-full justify-center grid text-center overflow-hidden  p-4  '>
                        <p className=" text-text/70">{person.department}</p>
                        <p className="text-text flex items-center gap-2 justify-center"> <FaUserGraduate />
                            {person.designation}</p>
                        <h3 className="text-xl font-semibold text-primary text-center">{person.name}</h3>
                    </div>

                </div>
            </div>
        </>
    );
};

export default TeacherCard;