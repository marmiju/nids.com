import {
  GetInfoResponse,
  InfoData as fetchInfoData,
} from "@/lib/infoData/InfoData";
import React from "react";
import { FooterClient } from "./footerClient"; // New client component

export const Footer = async () => {
  const infodata: GetInfoResponse = await fetchInfoData();

  return (
    <footer className=" bg-slate-200 w-full lg:p-10 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1280px] mx-auto">
        <FooterClient infodata={infodata} />
      </div>
    </footer>
  );
};
