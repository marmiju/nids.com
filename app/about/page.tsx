import { AboutData, AboutUsData } from "@/lib/about/AboutData";
import React from "react";
import Programs from "../components/Programs/Programs";
import VisMis from "../components/vis_mis/VisMis";
import { Award } from "../components/award/Award";

const page = async () => {
  const aboutData: AboutUsData = await AboutData();
  console.log("aboutdata", aboutData);

  return (
    <div className="w-full ease-linear">
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
      <Award />

      <div className="max-w-[1200px] mx-auto ">
        <Programs programs={aboutData.programs} />
        <VisMis goal={aboutData.goal}></VisMis>
      </div>
    </div>
  );
};
export default page;
