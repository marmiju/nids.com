import { usertype } from '@/lib/users/Users';
import React from 'react';
import { MdClose } from 'react-icons/md';
import ImageCard from '../card/ImageCard';
import ListCard from '../card/ListCard';



const PersonalModal = ({person, handlemodal}:{person:usertype, handlemodal:()=>void}) => {
    return (
        <div className="fixed bg-black/50   inset-0 z-50 flex items-center justify-center space-x-2">
             
            <div className="bg-secondary/20 border border-white/30 backdrop-blur-3xl p-6 rounded-lg shadow-sm">
                 
                <div className='grid md:flex gap-4'>
                   <ImageCard   title={person.name} subTitle={person.email}/>
                   <ListCard person={person}/>

                </div>
               
            </div>
            <div onClick={handlemodal} className='flex justify-end  rounded-lg p-2 mt-4 bg-primary text-background'>
                    <MdClose className=' hover:cursor-pointer'></MdClose>
                </div>
        </div>

    );
};

export default PersonalModal;