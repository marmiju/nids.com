import { InfoData } from "@/lib/infoData/InfoData";
import React from "react";

export const Footer = async () => {
  const infodata = await InfoData();

  return (
    <div className="h-[300px] w-full bg-gray-800 text-gray-100">Footer</div>
  );
};
