import { program } from "@/lib/about/AboutData";
import React from "react";
type props = {
  program: program;
};

const Singleprogram: React.FC<props> = ({ program }) => {
  return (
    <div className="bg-slate-50 grid md:flex shadow  hover:scale-101 hover:drop-shadow-xl  transition-all duration-500 border-gray-100-50 ">
      <img
        className=" rounded-l-sm w-1/3"
        src={program.image}
        alt={program.title}
      />
      <div className="p-4">
        <p className="md:text-2xl font-bold border-b border-gray-200">
          {program.title}
        </p>
        <p className="text-sm">{program.desc}</p>
      </div>
    </div>
  );
};

export default Singleprogram;
