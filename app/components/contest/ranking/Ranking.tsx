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
    <div className="max-w-[1280px] mx-auto text-center my-10">
      {ranking && ranking.length > 0 ? (
        <>
          <h2 className="text-xl text-black bg-gray-200 rounded-t-xl font-semibold p-2 ">
            Leader Board
          </h2>
          <div className="flex bg-gray-300 text-md font-medium  text-black py-2">
            <p className="w-[10%] overflow-ellipsis">Rank</p>
            <p className="w-[10%] overflow-ellipsis">UserId</p>
            <p className="w-[20%] overflow-ellipsis ">UserName</p>
            <p className="w-[10%] overflow-ellipsis ">Point</p>
            <p className="w-[10%] overflow-ellipsis">Accuracy</p>
            <p className="w-[10%] overflow-ellipsis ">problems</p>
            <p className="w-[20%]  overflow-ellipsis">Accepted</p>
            <p className="w-[10%]  overflow-ellipsis">submission</p>
          </div>
        </>
      ) : (
        <p className="bg-red-200 p-2 text-red-900 rounded">No Percipient Yet</p>
      )}

      <div className=" ">
        {ranking.map((rank, index) => {
          return (
            <RanksTable
              key={index}
              data={rank}
              index={index}
              lenofrank={ranking.length}
            />
          );
        })}
        <p className="text-black block md:hidden bg-red-100 mt-10 p-1">
          NOTE: Active Desktop Mode for Better experience
        </p>
      </div>
    </div>
  );
};
