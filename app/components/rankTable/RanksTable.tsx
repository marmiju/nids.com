import { Type_Ranks } from "@/lib/Ranking/GetRanking";
import React from "react";
interface rankprops {
  data: Type_Ranks;
  index: number;
  lenofrank: number;
  accepted_problem_ids?: string;
}

export const RanksTable: React.FC<rankprops> = ({ data, index, lenofrank }) => {
  console.log(index, lenofrank - 1);
  return (
    <div
      className={`
            flex text-center p-2 text-sm 
            ${index === lenofrank - 1 ? "rounded-b-xl shadow" : ""}
         ${
           index === 0
             ? "bg-red-800 text-white"
             : index === 1
             ? "bg-amber-800 text-white"
             : index === 2
             ? "bg-yellow-200 text-black"
             : index % 2 != 0
             ? "bg-gray-300 text-gray-800"
             : "bg-gray-700 text-white"
         }`}
    >
      <p className={`w-[15%] `}>{` ${
        index == 0
          ? "👑"
          : index == 1
          ? "2nd"
          : index == 2
          ? "3rd"
          : index + 1 + "th"
      } `}</p>
      <p className="w-[15%]">{data.user_id}</p>
      <p className="w-[30%]">{data.username}</p>
      <p className="w-[20%]">{data.total_point}</p>
      <p className="w-[20%]">{data.acceptance_rate}%</p>
      <p className="w-[20%]">{data.total_problems}</p>
    </div>
  );
};
