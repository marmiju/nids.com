import { montserrat } from "@/lib/fonts/Alexandria";
import { props } from "@/lib/heroData/HeroData";
import React from "react";
import { FaMessage } from "react-icons/fa6";

export const HeroContent: React.FC<props> = ({ data }) => {
  return (
    <div className="block text-white space-y-2  w-full px-2 md:w-1/2 ml-4 md:ml-20 lg:ml-32">
      <h1 className="">Welcome to</h1>
      <h1 className={`text-2xl md:text-4xl font-bold ${montserrat.className}`}>
        {data.title}
      </h1>
      <h1 className="text-lg text-gray-200">{data.slogan}</h1>
      <button className=" p-2 rounded-sm bg-white hover:bg-transparent text-black hover:text-white flex items-center gap-2  mt-2  hover:backdrop-blur-3xl transition-all duration-700 hover:shadow-2xl hove:mt-0  drop-shadow-sm cursor-pointer shadow-white">
       <FaMessage/> Get Free Consultation
      </button>
    </div>
  );
};
