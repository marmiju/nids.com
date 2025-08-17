import { StaticImageData } from 'next/image';
import gate from "@/public/gate.jpg"
import lab from "@/public/lab.jpg"
import classroom from "@/public/classroom.jpg"
import campas from "@/public/campus.jpg"


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
            title: "Welcome to NIDS",
            link:"https://wa.me/+8801765903624",
            subtitle: "We offer 4-year B.Sc honors programs in CSE and BBA, preparing students with the skills and knowledge for successful careers in technology and business.",
        },
        
        {
            image: lab,
            title: "Welcome to lab",
            subtitle: "we provide our college lab to practice any time and work with with senior",
        },
        {
            image: classroom,
            title: "NIDS classroom",
            subtitle: "Our classrooms are well-ventilated, spacious, and equipped with modern teaching tools, creating a comfortable and interactive learning environment for students",
        }, 
        {
            image: campas,
            title: "Our Campus",
            subtitle: "Our college campus offers a vibrant and student-friendly environment, equipped with modern classrooms, computer labs, a spacious library, and green open spaces — designed to inspire learning, innovation, and personal growth",
            
        },
    ];

    return herodata
}
