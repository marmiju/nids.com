import { InfoData } from "@/lib/infoData/InfoData";
import Image from "next/image";
import React from "react";

export const Sitelogo = async () => {
  const infodata: InfoData = await InfoData();
  return (
    <div>
      <Image
        className=" rounded-sm"
        height={100}
        width={100}
        src={
          infodata.logo ||
          "https://i.ibb.co/zTXpfjr2/Chat-GPT-Image-May-9-2025-12-33-23-AM.png"
        }
        alt="SiteLogo"
      />
    </div>
  );
};
