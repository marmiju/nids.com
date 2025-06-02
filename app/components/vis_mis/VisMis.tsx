"use client";

import { Goal } from "@/lib/about/AboutData";
import { montserrat } from "@/lib/fonts/Alexandria";
import React, { useState } from "react";
type props = {
  goal: Goal[];
};

const VisMis: React.FC<props> = ({ goal }) => {
  const [open, setopen] = useState<number | null>(0);

  function togleshow(index: number) {
    setopen((prev) => (prev === index ? null : index));
  }

  return (
    <div className="p-4">
      {goal.map((data, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => togleshow(index)}
              className=" backdrop-blur-2xl border-secondary bg-background text-primary border rounded-sm drop-shadow mt-1 flex px-2 transition-all duration-300 items-center hover:cursor-pointer gap-2 text-2xl font-medium  justify-between"
            >
              <p className={`p-1 ${montserrat.className} font-semibold `}>
                {data.title}
              </p>

              <p>{open == index ? "-" : "+"}</p>
            </div>
            <p
              className={`w-full overflow-y-auto text-text drop-shadow-xl whitespace-pre-wrap break-words pointer-events-auto bg-secondary backdrop-blur-2xl  p-2  transition-all duration-300 ease-in-out ${
                open === index ? "" : "hidden"
              }`}
            >
              {data?.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default VisMis;
