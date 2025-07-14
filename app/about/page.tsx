import { AboutData, AboutUsData } from "@/lib/about/AboutData";
import React from "react";
import Programs from "../components/Programs/Programs";
import VisMis from "../components/vis_mis/VisMis";
import { Award } from "../components/award/Award";
import backgroundImage from "../../lib/background6.png";
import Image from "next/image";
import banner from "@/public/banner.png";
import { Loading } from "../Loading";

const page = async () => {
  const aboutData: AboutUsData = await AboutData();

  if(!aboutData){
    return <Loading/>
  }

  return (
    <div
      className="w-full ease-linear"
    >
      {/* //hero */}
      <div className="relative w-full h-[600px] md:h-screen">
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
      <Award />

      <div className="max-w-[1200px] mx-auto ">
        <Programs programs={aboutData.programs} />
        <VisMis goal={aboutData.goal}></VisMis>
      </div>
    </div>
  );
};
export default page;
