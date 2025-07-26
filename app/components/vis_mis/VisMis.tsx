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

  if (!goal) {
    return <div className="w-full h-96 bg-slate-200 animate-pulse flex items-center justify-center" />
  }

  return (
    <div className="p-4">
      {goal.map((data, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => togleshow(index)}
              className={`backdrop-blur-2xl border-secondary  
                ${open === index ? 'text-background bg-primary' : ' bg-background text-primary'}
                border rounded-sm drop-shadow mt-1 flex px-2 transition-all duration-300 items-center hover:cursor-pointer gap-2 text-2xl font-medium  justify-between`}
            >
              <p className={`p-1 ${montserrat.className} font-semibold`}>
                {data.title}
              </p>
              <p>{open == index ? "-" : "+"}</p>
            </div>
            <p
              className={`
    w-full 
    overflow-hidden 
    text-text 
    drop-shadow-xl 
    whitespace-pre-wrap 
    break-words 
    pointer-events-auto 
    bg-secondary 
    backdrop-blur-2xl  
    p-2  
    transition-all duration-500 ease-in-out 
    ${open === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
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
