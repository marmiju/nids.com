import { AboutData, AboutUsData } from "@/lib/about/AboutData";
import React from "react";
import VisMis from "../components/vis_mis/VisMis";
import { Award } from "../components/award/Award";
import Image from "next/image";
import banner from "@/public/banner.png";
import SingleCardWithTitle from "../components/singCardwithTitle&icon/SingleCartTitle";
import { FaComputer, FaInternetExplorer, FaPeopleRoof, FaRankingStar } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { BiCode } from "react-icons/bi";
import { GrMore } from "react-icons/gr";
import { Loading } from "../components/loading/Loading";

const page = async () => {
  const aboutData: AboutUsData = await AboutData();
  if(!aboutData){
    return <Loading/>
  }

  return (
    <div
      className="w-full ease-linear"
    >
      <p>Ahha</p>
      {/* //hero */}
      <div className="relative  w-full h-[600px] md:h-screen">
        <Image
          src={banner}
          alt="Hero Background"
          fill
          placeholder="blur"
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-black/60 h-svh border grid border-white items-center p-10 md:p-20 lg:p-40 text-white`}>
          <div>
            <h1 className="text-center  font-bold text-lg md:text-2xl lg:text-4xl">
              {aboutData.title}
            </h1>
            <p>{aboutData.desc}</p>
          </div>
        </div>
      </div>
      {/* //end hero */}
      <div className="relative z-1">
        <Award />
      </div>

      <div className="max-w-[1200px] mx-auto ">
        <p className="p-6">
          Welcome to Northbengal Institute of Development Studies (NIDS)! As you browse through this brochure I hope it will assist you making a choice and entering to a center of research, training and academic excellence. You will find a helpful environment and committed researchers, trainers, teachers and staff. NIDS through our collaborative efforts with similar other stakeholders will bring continuous improvements in our programs, in our learning facilities and resources so that you receive the best learning and experience a memorable life.
          The underlying philosophy of NIDS is to develop productive human resources with strong morale, who will grow as individuals with applied knowledge and skills, self-confidence and devotion so that they become a citizen with a sense of leadership. Through practical and hands-on learning with co-curricular and extra-curricular activities, we try to make NIDS a true center of excellence.
          We are committed to success and prosperity in personal and academic career of students and trainees. NIDS is the only private institute in Rangpur Division offering multi-dimension activities (eg, research, training and tertiary level teaching) with residential facilities without undermining quality of services. We aim to develop self-confidence, adaptability, team work and market oriented diversified skills in the youth. The strength of NIDS breeds from the unique morale and contributions of our staff and our distinctive participatory approach that culminates in people ready for this dynamic society and the ever challenging job market. I hope you will turn up with best career as demanded in the job market using our professional services and receiving quality learning by doing.
        </p>
        <VisMis goal={aboutData.goal}></VisMis>

        {/* facilities */}
        <div className="grid grid-cols-4 p-4 space-y-4 items-center justify-center">
          <h3 className="col-span-4 text-center text-3xl font-bold mt-10 bg-primary text-background p-4">Our facilities</h3>
          {/* 
            card imported from components/CardwithTitle
            props: title + reactIccon(optional) 
          */}
          <SingleCardWithTitle title="Lab Facilities" icon={<FaComputer />} />
          <SingleCardWithTitle title="Library" icon={<IoLibrarySharp />} />
          <SingleCardWithTitle title="Internet Facilities" icon={<FaInternetExplorer />} />
          <SingleCardWithTitle title="Hostel Facilities" icon={<GiFamilyHouse /> } />
          <SingleCardWithTitle title="Tutorial" icon={<BiCode /> } />
          <SingleCardWithTitle title="programming contest" icon={<FaRankingStar /> } />
          <SingleCardWithTitle title="Student Colabration" icon={<FaPeopleRoof />} />
          <SingleCardWithTitle title="and more" icon={<GrMore />} />

        </div>

        {/*Location  */}
        <div className="max-w-[1280px] mx auto flex flex-col md:flex-row p-4 lg:p-0 rounded-2xl gap-4 ">
          <iframe
            className="w-full h-44 md:h-64 lg:h-96 p-2 border rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.6585398891198!2d89.24184158008369!3d25.715727252201958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e332789fba6eed%3A0xd1701166a4d5eb23!2sDarshana!5e0!3m2!1sen!2sbd!4v1753434053466!5m2!1sen!2sbd" loading="lazy" >

          </iframe>
          <div className="">
            <p>Location: Darshana more, Rangpur</p>
            <p>Contact: +8801 8623476</p>
            <p>Facebook: Nids- northbengle institute and development institute</p>
          </div>

        </div>
      </div>
    </div>
  );
};
export default page;
