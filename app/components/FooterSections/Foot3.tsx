import { InfoData } from "@/lib/infoData/InfoData";
import React from "react";

type props = {
  data: InfoData;
};

export const Foot3: React.FC<props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 justify-center items-center p-4 ">
      <p className="font-semibold tex-xl">Info</p>
      <p className="font-medium tex-sm">{data.description}</p>
      <p className="">⨀ {data.location}</p>
      <p>⨀ {data.email}</p>
      <p>⨀ {data.phone}</p>
    </div>
  );
};
