import { GetInfoResponse, InfoData } from "@/lib/infoData/InfoData";
import React from "react";
import { Foot1 } from "../FooterSections/Foot1";
import { Foot2 } from "../FooterSections/Foot2";
import { Foot3 } from "../FooterSections/Foot3";

export const Footer = async () => {
  const infodata: GetInfoResponse = await InfoData();

  return (
    <div className=" bg-slate-200  w-full lg:p-10 mt-20">
      <div className=" grid grid-cols-1: md:grid-cols-3 max-w-[1280px] mx-auto">
        <Foot1 info={infodata}></Foot1>
        <Foot3 data={infodata.infoData} />
        <Foot2 />
      </div>
    </div>
  );
};
