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

const text = `Carry on action research, studies, and practical education for the advancement of general, technical, engineering, socio-technical, agricultural, environmental, legal, computer and information technology to meet the requirements of the northwest Bangladesh and the country in general commensurate with scientific and technological advancement in the world and thereby providing scope for building and molding the life, character and thoughts of the youths, students, civil society, NGOs, duty bearers, policy makers etc.

Establish database with regard to pertinent issues of northwest Bangladesh for the promotion of information technology to cope with the current technological advancement

Conduct specific studies for sharing development information on effective delivery of services/resources administered by Government agencies, NGOs and Private sectors

Arrange for institutional education, training, diploma and certificate courses in socio-economic program so that the youth and students may get vocational training and guidance and are engaged in country-wide socio-economic framework of activities

Publish literature journals, books, news bulletins and research work relating to social science, business, language, literature, science and technology, agriculture, engineering, community health, computer science and information technology

Carry on consultancy works, studies, projects etc. in environment, agriculture, health and family planning, education sectors, civil, mechanical, computer, irrigation and water resources engineering etc. either solely or in collaboration with any local or foreign organizations or to act as managing agent of any local or foreign organizations, governments, bilateral or multilateral donor agencies or institutions.`;

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
    {
      title: "Major Objectives",
      desc: `Carry on </br> action research, studies, and practical education for the advancement of general, technical, engineering, socio-technical, agricultural, environmental, legal, computer and information technology to meet the requirements of the northwest Bangladesh and the country in general commensurate with scientific and technological advancement in the world and thereby providing scope for building and molding the life, character and thoughts of the youths, students, civil society, NGOs, duty bearers, policy makers etc.

Establish database with regard to pertinent issues of northwest Bangladesh for the promotion of information technology to cope with the current technological advancement

Conduct specific studies for sharing development information on effective delivery of services/resources administered by Government agencies, NGOs and Private sectors

Arrange for institutional education, training, diploma and certificate courses in socio-economic program so that the youth and students may get vocational training and guidance and are engaged in country-wide socio-economic framework of activities

Publish literature journals, books, news bulletins and research work relating to social science, business, language, literature, science and technology, agriculture, engineering, community health, computer science and information technology

Carry on consultancy works, <br/> studies, projects etc. in environment, agriculture, health and family planning, education sectors, civil, mechanical, computer, irrigation and water resources engineering etc. either solely or in collaboration with any local or foreign organizations or to act as managing agent of any local or foreign organizations, governments, bilateral or multilateral donor agencies or institutions.`,
    },
  ],
};
