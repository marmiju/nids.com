"use client";
import { goal } from "@/lib/about/AboutData";
import { montserrat } from "@/lib/fonts/Alexandria";
import React, { useState } from "react";
type props = {
  goal: goal[];
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
              className="bg-slate-300 flex px-2 transition-all duration-300 items-center hover:cursor-pointer mb-1 rounded-sm text-2xl font-medium  justify-between"
            >
              <p
                className={`p-1 ${montserrat.className} font-semibold text-slate-100`}
              >
                {data.title}
              </p>

              <p>{open == index ? "-" : "+"}</p>
            </div>
            <p
              className={`w-full overflow-y-auto whitespace-pre-wrap break-words pointer-events-auto bg-gray-200 p-4 transition-all duration-300 ease-in-out ${
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
