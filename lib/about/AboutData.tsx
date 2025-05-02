export interface program {
  title: string;
  desc: string;
  image: string;
  slogan?:string
}
export interface programs {
  title: string;
  desc?: string;
  program: program[];
}

export interface AboutUs {
  title: string;
  desc: string;
  image: string;
  programs: programs;
  location:string
}

export const AboutData:AboutUs = {
  title: "Know About Us",
  image: "https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png",
  desc: "Welcome to NIDS, a center of academic excellence, innovation, and holistic development. Since our establishment in 2000, we have remained committed to empowering students through quality education, values-based learning, and real-world exposure.",
  programs: {
    title: "Programs We Offer",
    program: [
      {
        title: "Bachelor of Business Administration (BBA)",
        desc: "Focused on building future leaders in business, entrepreneurship, and management",
        image: "https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png",
      },
      {
        title: "Bachelor of Science in Computer Science & Engineering (CSE)",
        desc: "A comprehensive engineering course that blends \\n computer theory with hands-on technical skills in programming, data, and system development",
        image: "https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png",
        slogan:''
      },
    ],
  },
  location:'Darshana Rangpur',
};
