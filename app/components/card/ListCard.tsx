import { usertype } from '@/lib/users/Users';
import React from 'react';

const ListCard = ({person}:{person:usertype}) => {
    return (
        <div className=' p-2 rounded-lg bg-secondary/50 backdrop-blur-2xl text-text transition-shadow duration-300'>
            <p className=' px-4 py-2'>{person.username}</p>
            <p className=' px-4 py-2'>{person.name}</p>
            {person.email && <p className=' px-4 py-2'>{person.email}</p>}
            <p className=' px-4 py-2'>{person.phone}</p>
           
        </div>
    );
};

export default ListCard;