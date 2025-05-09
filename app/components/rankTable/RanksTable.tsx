"use client";
import { updateData } from "@/app/redux/ProblemSlice";
import { Type_Ranks } from "@/lib/Ranking/GetRanking";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

interface rankprops {
  data: Type_Ranks;
  index: number;
  lenofrank: number;
}

export const RanksTable: React.FC<rankprops> = ({ data, index, lenofrank }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.accepted_problem_ids) {
      const user_id = data.user_id;
      const pblmsolved = data.accepted_problem_ids
        .split(",")
        .map((id) => Number(id));

      dispatch(updateData({ user_id, value: pblmsolved }));
      console.log("accepted_problem_ids", pblmsolved);
    } else {
      console.log("No accepted_problem_ids found");
    }
  }, [data.accepted_problem_ids, data.user_id, dispatch]);

  return (
    <div
      className={`flex text-center p-2 text-sm 
        ${index === lenofrank - 1 ? "rounded-b-xl shadow" : ""}
        ${
          index === 0
            ? "bg-red-800 text-white"
            : index === 1
            ? "bg-amber-800 text-white"
            : index === 2
            ? "bg-yellow-200 text-black"
            : index % 2 === 0
            ? "bg-gray-100 text-gray-800"
            : "bg-slate-200 text-black"
        }`}
    >
      <p className="w-[10%]">
        {index === 0
          ? "👑"
          : index === 1
          ? "2nd"
          : index === 2
          ? "3rd"
          : `${index + 1}th`}
      </p>
      <p className="w-[10%]">{data.user_id}</p>
      <p className="w-[20%]">{data.username}</p>
      <p className="w-[10%]">{data.total_point}</p>
      <p className="w-[10%]">{data.acceptance_rate}%</p>
      <p className="w-[10%]">{data.total_problems}</p>
      <p className="w-[20%]">
        {data.accepted_problem_ids
          ? data.accepted_problem_ids
          : "Not acceptence"}
      </p>
      <p className="w-[10%]">{data.total_submissions}</p>
    </div>
  );
};
