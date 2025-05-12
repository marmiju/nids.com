"use client";
import { goal } from "@/lib/about/AboutData";
import { montserrat } from "@/lib/fonts/Alexandria";
import { Montserrat } from "next/font/google";
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
              className="bg-slate-400 flex px-2 transition-all duration-300 items-center hover:cursor-pointer mb-1 rounded-sm text-2xl font-medium text-white justify-between"
            >
              <p className={`m-1 ${montserrat.className}`}>{data.title}</p>

              <p>{open == index ? "-" : "+"}</p>
            </div>
            <p
              className={`${
                open == index ? "" : "hidden"
              } bg-slate-200 p-4 transition-all duration-300 ease-in-out`}
            >
              {data.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default VisMis;
