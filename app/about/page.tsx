import { AboutData, AboutUs } from "@/lib/about/AboutData";
import React from "react";
import Programs from "../components/Programs/Programs";

const page = () => {
  const aboutData: AboutUs = AboutData;

  return (
    <div className="w-full">
      {/* //hero */}
      <div
        style={{ backgroundImage: `url(${aboutData.image})` }}
        className={`grid  w-full h-screen bg-cover justify-center items-center text-white `}
      >
        <div className={`text-center max-w-[800px] space-y-4`}>
          <h1 className="text-center  font-bold text-lg md:text-2xl lg:text-4xl">
            {aboutData.title}
          </h1>
          <p>{aboutData.desc}</p>
        </div>
      </div>
      {/* //end hero */}
      <Programs programs={aboutData.programs}/>
      
    </div>
  );
};
export default page;
