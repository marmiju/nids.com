import Image from 'next/image';
import React from 'react';
import bg from "@/public/bg.png"

interface ImageCardProps {
    imageUrl?: string ;
    title?: string;
    subTitle?: string;

}

const ImageCard = ({imageUrl,title,subTitle}:ImageCardProps) => {
    return (
        <div className='space-y-2 gap-2'>
            <Image
                src={imageUrl || bg } 
                alt={title || 'Image Card'}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg shadow-md"/>
            <p className='text-2xl text-white'>{title}</p>
            <p className='text-white/80'>{subTitle!}</p>
        </div>
    );
};

export default ImageCard;