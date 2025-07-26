import {  ProgramsData } from "@/lib/about/AboutData";
import React from "react";
import Singleprogram from "./program/SingleProgram";
import { FaDownload } from "react-icons/fa6";

type props = {
  programs: ProgramsData;
};

const Programs: React.FC<props> = ({ programs }) => {
  if (!programs || programs.programs.length === 0) {
    return <div className="text-center p-4">No programs available.</div>;
  }
  return (
    <div className="max-w-[1280px] mx-auto mt-20 space-y-6 px-[2%]  grid">
      <div className=" w-full text-center grid ">
        <p className=" text-xl md:text-3xl text-primary lg:text-4xl font-semibold mb-5  ">
          {programs.title}
        </p>
        <p className="text-center text-text">{programs.desc}</p>
        <a
          className="backdrop-blur-3xl flex items-center hover:bg-slate-200 justify-center border gap-2 bg-white/50 border-white/75  drop-shadow-lg w-64 mx-auto shadow py-2 px-3 rounded-sm mt-5 hover:scale-105 transition-all duration-300"
          href="https://www.nu.ac.bd/syllabus.php"
        >
          <FaDownload/>
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
