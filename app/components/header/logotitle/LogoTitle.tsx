import { siteLogo } from "@/lib/infoData/InfoData";
import Image from "next/image";
import React from "react";

export const LogoTitle = () => {
  return (
    <div className=" flex gap-2 p-2">
      {
        siteLogo && <Image
        src={siteLogo}
        alt={"logo"}
        width={60}
        height={40}
      />
      }
      <div>
        <h1 className="text-md md:text-lg lg:text-2xl font-bold ">
          NIDS
        </h1>
        <p className="">Since 2012</p>
      </div>
    </div>
  );
};
