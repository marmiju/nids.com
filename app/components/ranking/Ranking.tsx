"use client";
import { GetRanking, Rank_Props, Type_Ranks } from "@/lib/Ranking/GetRanking";
import React, { useEffect, useState } from "react";
import { RanksTable } from "../rankTable/RanksTable";

export const Ranking = ({ contest_id }: Rank_Props) => {
  const [ranking, setRanking] = useState<Type_Ranks[]>([]);

  useEffect(() => {
    const fetchRanking = async () => {
      const rankingData = await GetRanking({ contest_id });
      setRanking(rankingData || []);
    };
    fetchRanking();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto text-center my-10">
      {ranking && ranking.length > 0 ? (
        <>
          <h2 className="text-xl text-white bg-gray-700 rounded-t-xl font-semibold p-2">
            Contest Ranking
          </h2>
          <div className="flex bg-gray-500 text-md font-medium  text-white p-2">
            <p className="w-[15%] ">Rank</p>
            <p className="w-[15%] ">UserId</p>
            <p className="w-[30%] ">UserName</p>
            <p className="w-[20%] ">Point</p>
            <p className="w-[20%] ">Accuracy</p>
            <p className="w-[20%] ">Submited Problems</p>
          </div>
        </>
      ) : (
        <p className="bg-red-200 p-2 text-red-900 rounded">No Percipient Yet</p>
      )}

      <div>
        {ranking.map((rank, index) => {
          return (
            <RanksTable data={rank} index={index} lenofrank={ranking.length} />
          );
        })}
        <p className="text-black bg-red-100 mt-10 p-1">
          NOTE: Active Desktop Mode for Better experience
        </p>
      </div>
    </div>
  );
};
