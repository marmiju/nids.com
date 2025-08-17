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
        speech: `Welcome to Northbengal Institute of Development Studies (NIDS)! As you browse through this brochure I hope it will assist you making a choice and entering to a center of research, training and academic excellence. You will find a helpful environment and committed researchers, trainers, teachers and staff. NIDS through our collaborative efforts with similar other stakeholders will bring continuous improvements in our programs, in our learning facilities and resources so that you receive the best learning and experience a memorable life.
`,
        imageUrl: chairmanSir, // make sure this image exists in your /public folder
    },
    {
        id: 1,
        name: "Faridul islam",
        title: "lecturer at nids",
        speech: `I graduated from Begum Rokeya University, Rangpur, in Electrical and Electronic Engineering. My goal is to spread quality education so that people can become skilled and contribute to the advancement of science and technology.`,
        imageUrl: faridsir, // make sure this image exists in your /public folder
    }
]
