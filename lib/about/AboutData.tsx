export interface program {
  title: string;
  desc: string;
  image: string;
  slogan?: string;
}
export interface programs {
  title: string;
  desc?: string;
  program: program[];
}
// Achivements
export interface Achivements {
  title: string;
  desc: string;
  position?: string;
  image?: string;
}
export interface goal {
  title: string;
  desc: string;
}

export interface AboutUs {
  title: string;
  desc: string;
  image: string;
  programs: programs;
  achivements: Achivements[];
  goal: goal[];
}

export const AboutData: AboutUs = {
  title: "Know About Us",
  image: "https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png",
  desc: "Welcome to NIDS, a center of academic excellence, innovation, and holistic development. Since our establishment in 2000, we have remained committed to empowering students through quality education, values-based learning, and real-world exposure.",
  programs: {
    title: " Bachelor Programs at NIDS",
    desc: "The National Institute of Design & Sciences (NIDS), affiliated with the National University of Bangladesh, offers undergraduate programs that combine academic excellence with practical skills to prepare students for success in their respective fields. Our Bachelor programs focus on both theoretical foundations and hands-on experiences to equip students with the tools they need to thrive in today's competitive world.",
    program: [
      {
        title: "Bachelor of Business Administration (BBA)",
        desc: "The B.Sc. in Computer Science & Engineering (CSE) program at NIDS is designed to provide students with a strong foundation in computer science principles and practical engineering skills. The curriculum includes core subjects such as computer programming, mathematics, data structures, algorithm design, theory of computation, database management systems, networking, information security, mobile application development, and web design and development. Students pursuing the course will gain profound knowledge about the design, development, and management of software and hardware systems. The program emphasizes analytical capability, critical thinking, and problem-solving skills, preparing graduates to meet the ever-growing demand of the ICT industry",
        image:
          "https://i.ibb.co/5grYz76t/Green-Illustrated-Start-Your-Business-Facebook-Post-2.png",
      },
      {
        title: "Bachelor of Science in Computer Science & Engineering (CSE)",
        desc: "The B.Sc. in Computer Science & Engineering (CSE) program at NIDS is designed to provide students with a strong foundation in computer science principles and practical engineering skills. The curriculum includes core subjects such as computer programming, mathematics, data structures, algorithm design, theory of computation, database management systems, networking, information security, mobile application development, and web design and development. Students pursuing the course will gain profound knowledge about the design, development, and management of software and hardware systems. The program emphasizes analytical capability, critical thinking, and problem-solving skills, preparing graduates to meet the ever-growing demand of the ICT industry",
        image:
          "https://i.ibb.co/5grYz76t/Green-Illustrated-Start-Your-Business-Facebook-Post-2.png",
        slogan: "",
      },
    ],
  },
  achivements: [
    {
      title: "achivement 01",
      desc: "Achivement Description 01",
      position: "1st",
      image: "https://i.ibb.co/7JT5CLpZ/Untitled-design-5.png",
    },
  ],
  goal: [
    {
      title: "vission",
      desc: "To be the leading force in sustainable innovation, creating a world where technology and nature thrive together.",
    },
    {
      title: "mission",
      desc: "To be the leading force in sustainable innovation, creating a world where technology and nature thrive together.To be the leading force in sustainable innovation, creating a world where technology and nature thrive together.To be the leading force in sustainable innovation, creating a world where technology and nature thrive together.To be the leading force in sustainable innovation, creating a world where technology and nature thrive together.To be the leading force in sustainable innovation, creating a world where technology and nature thrive together.",
    },
  ],
};
