import { GetInfoResponse } from "@/lib/infoData/InfoData";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import React from "react";

type props = {
  info: GetInfoResponse;
};

export const Foot1: React.FC<props> = ({ info }) => {
  return (
    <div className=" grid justify-center space-y-2 ">
      <div className=" text-black w-[160px] -mt-20 rounded-2xl ">
        <Image
          className="rounded-2xl shadow-2xs border-slate-200 p-1 border-2"
          src={
            info.infoData.logo ??
            "https://i.ibb.co/zTXpfjr2/Chat-GPT-Image-May-9-2025-12-33-23-AM.png"
          }
          alt="Logo"
          width={160}
          height={160}
        />
      </div>
      {/* ending of Image */}
      <p className="text-gray-600 text-xl  w-full font-semibold  rounded-lg   ">
        {info.infoData.title}
      </p>
      <p className="text-gray-400 text-md w-full   ">{info.infoData.tagLine}</p>
      <div className="flex gap-4 mt-2">
        {info.socialData.map((data, index) => {
          return (
            <a
              key={data.title}
              href={
                data.link.startsWith("http")
                  ? data.link
                  : `https://${data.link}`
              }
              target="_blank"
              className="inline-block transition-transform hover:scale-110"
            >
              <img
                src={data.icon}
                alt={data.title}
                className="w-8 h-8 object-contain"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
