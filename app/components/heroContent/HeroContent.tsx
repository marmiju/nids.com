import { montserrat } from "@/lib/fonts/Alexandria";
import { HeroDataType } from "@/lib/heroData/HeroData";
import Link from "next/link";
import React from "react";
import { FaMessage } from "react-icons/fa6";

export const HeroContent = ({ data }:{data:HeroDataType}) => {
  return (
    <div className="block max-w-[600px] text-white space-y-2  w-full px-2  ml-4 md:ml-20 lg:ml-32">
     {data.title &&  <h1 className={`text-2xl md:text-4xl font-bold ${montserrat.className}`}>
        {data.title}
      </h1>}
      {data.subtitle && <h1 className="text-lg text-gray-200">{data.subtitle}</h1>}
      {
        data.link &&
        <Link href={data.link} className=" p-2 rounded-sm bg-white hover:bg-transparent text-black hover:text-white flex items-center gap-2  mt-2  hover:backdrop-blur-3xl transition-all duration-700 hover:shadow-2xl hove:mt-0  drop-shadow-sm cursor-pointer shadow-white">
       <FaMessage/> Get Free Consultation
      </Link>
      }
    </div>
  );
};
