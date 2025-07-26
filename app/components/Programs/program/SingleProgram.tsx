import { ProgramItem } from "@/lib/about/AboutData";
import Image from "next/image";
import React from "react";
type props = {
  program: ProgramItem;
};

const Singleprogram: React.FC<props> = ({ program }) => {
  return (
    <div className="bg-secondary backdrop-blur-2xl grid md:flex shadow  hover:scale-102  hover:drop-shadow-xl  transition-all duration-500 border-gray-100-50 ">
      <Image
        className=" rounded-l-sm md:w-1/3"
        priority
        width={500}
        height={300}
        src={program.image}
        alt={program.title}
      />
      <div className="p-4">
        <p className="md:text-2xl text-primary font-bold border-b border-gray-200">
          {program.title}
        </p>
        <p className="text-md text-text">{program.desc}</p>
      </div>
    </div>
  );
};

export default Singleprogram;
