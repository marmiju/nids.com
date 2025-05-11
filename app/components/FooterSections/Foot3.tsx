import { InfoData } from "@/lib/infoData/InfoData";
import React from "react";

type props = {
  data: InfoData;
};

export const Foot3: React.FC<props> = ({ data }) => {
  return (
    <div className="grid justify-center p-2">
      Info
      <p>{data.description}</p>
      <p>{data.location}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
    </div>
  );
};
