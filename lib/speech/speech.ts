import faridsir from '@/public/faridsir.jpg'
import chairmanSir from '@/public/chairmanSir.jpg'
import { StaticImageData } from 'next/image';
interface SpeechProps {
    id: number,
    name: string;
    title: string;
    speech: string;
    imageUrl: StaticImageData;
}

export const speakerData: SpeechProps[] = [
    {
        id: 1,
        name: "Dr. Syed Samsuzzaman",
        title: `Chairman and Former Executive Director,
Northbengal Institute of Development Studies (NIDS)`,
        speech: `Technology is more than code — it's a bridge between problems and solutions. I believe in building things that help people, scale with purpose, and grow with learning. As a lifelong student of code, I strive to solve real-world problems with clean, scalable, and human-centric software.`,
        imageUrl: chairmanSir, // make sure this image exists in your /public folder
    },
    {
        id: 1,
        name: "Azizar Rahman",
        title: "Junior Software Developer at Innovate Digital",
        speech: ` problemsa bridge between problemsa bridge between problems and solutions. I believe in building things that help people, scale with purpose, and grow with learning. As a lifelong student of code, I strive to solve real-world problems with clean, scalable, and human-centric software.`,
        imageUrl: faridsir, // make sure this image exists in your /public folder
    }
]
