import { developer, deveType } from "@/lib/developer/developer";
import React from "react";

export const Developer = () => {
  const deveData = developer();
  return (
    <div className="text-center flex justify-center text-green-800 bg-slate-200 text-sm items-center">
      <p>Developed By Azizar Rahman | </p>
      <div className="flex justify-center gap-2 p-1">
        {deveData.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white p-1 rounded-sm  hover:scale-120 transition-all duration-300 hover:bg-amber-500"
            >
              <a href={data.url} target="_blank">
                <img className="h-5 w-5 " src={data.icon} alt={data.title} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
