import { ProgramItem, ProgramsData } from "@/lib/about/AboutData";
import React from "react";
import Singleprogram from "./program/SingleProgram";

type props = {
  programs: ProgramsData;
};

const Programs: React.FC<props> = ({ programs }) => {
  return (
    <div className="max-w-[1280px] mx-auto mt-20 space-y-6 px-[2%]  grid">
      <div className=" w-full text-center grid ">
        <p className=" text-xl md:text-3xl lg:text-4xl font-semibold mb-5  ">
          {programs.title}
        </p>
        <p className="text-center">{programs.desc}</p>
        <a
          className="bg-white drop-shadow-lg w-44 mx-auto shadow py-0.5 px-1 rounded-sm mt-5 hover:scale-105 transition-all duration-300"
          href="https://www.nu.ac.bd/syllabus.php"
        >
          Download syllabus
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {programs.programs.map((data, index) => {
          return <Singleprogram key={index} program={data}></Singleprogram>;
        })}
      </div>
    </div>
  );
};

export default Programs;
