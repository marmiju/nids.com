import { GetInfoResponse, InfoData } from "@/lib/infoData/InfoData";
import React from "react";
import { Foot1 } from "../FooterSections/Foot1";

export const Footer = async () => {
  const infodata: GetInfoResponse = await InfoData();

  return (
    <div className=" bg-slate-200  w-full lg:p-10 mt-20">
      <div className=" grid grid-cols-1: md:grid-cols-3 max-w-[1280px] mx-auto">
        <Foot1 info={infodata}></Foot1>
        <div>hello</div>
      </div>
    </div>
  );
};
