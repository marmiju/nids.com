import { StaticImageData } from 'next/image';

import gate from "@/public/gate.jpg";
import classroom from "@/public/classroom.jpg";
import lab from "@/public/lab.jpg";
import techersroom from "@/public/techersroom.jpg";

export interface HeroDataType {
    title: string;
    subtitle?: string;
    link?:string
    image?: StaticImageData;
}


// const data = {
//         title: 'NIDS - Northbengal Institute of Developement  Studies',
//         slogan: 'Empowering Minds, Shaping the Future',
//         link: 'facebook.com',
//         img: 'https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png'
//     }

export const HeroData = () => {

    const herodata:HeroDataType[] = [
        {
            image: gate,
            title: "Northbengal Institute and Development Studies",
            subtitle: "Empowering your future with nids we're here to help you. and we are always ready to help you",
            link: "https://www.facebook.com/nidsnorthbengal"
        },
        
        {
            image: lab,
            title: "Welcome to lab",
            subtitle: "Empowering your future",
            link: "https://www.facebook.com/nidsnorthbengal"
        },
        {
            image: classroom,
            title: "Our classroom",
            subtitle: "Empowering your future with nids we're here to help you. and we are always ready to help you and we are always ready to help you and we are always ready to help you and we are always ready to help you",
            link: "https://www.facebook.com/nidsnorthbengal"
        }, 
        {
            image: techersroom,
            title: "Teachers Roome",
            subtitle: "Empowering your future with nids we're here to help you. and we are always ready to help you",
            link: "https://www.facebook.com/nidsnorthbengal"
        },
    ];

    return herodata
}
