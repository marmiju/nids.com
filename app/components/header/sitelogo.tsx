"use client";
import  { RootType } from "@/app/redux/store/Store";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export const Sitelogo = () => {
  const info = useSelector((state:RootType) => state.info);
  const router = useRouter();
  return (
    <div className="hover:cursor-pointer" onClick={() => router.replace("/")}>
      <Image
        className=" rounded-sm"
        height={80}
        width={80}
        src={
          info.siteLogo ||
          "https://i.ibb.co/zTXpfjr2/Chat-GPT-Image-May-9-2025-12-33-23-AM.png"
        }
        alt="SiteLogo"
      />
    </div>
  );
};
