"use client";

import React, { useEffect, useState } from "react";
import { Props } from "@/lib/contest/Contest";
import { Contest } from "../components/contest/Contest";
import Link from "next/link";

const Page = () => {
  const [contestData, setContestData] = useState<Props | null>(null);


  useEffect(() => {
    const fetchContest = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/contest`);
        const data = await res.json();
        setContestData({ contests: data });
      } catch (err) {
        console.error("Failed to fetch contest data:", err);
      }
    };

    fetchContest();
  }, [contestData]);
  console.log(contestData);


  return (
    <div className="max-w-[1280px] mx-auto p-4 ">
      <p className="bg-gray-200 p-2 text-black rounded-sm">All Contest</p>
      <div className="flex w-full text-center mb-4 p-2 rounded-sm drop-shadow-sm text-white  bg-gray-800">
        <p className="w-[15%]">id</p>
        <p className="w-[25%]"> Status</p>
        <p className="w-[20%]"> Problems</p>
        <p className="w-[40%]">end_time</p>
      </div>
      {contestData?.contests.map((contest) => {
        return (
          <Link key={contest.id} href={`compete/${contest.id}`}>
            <Contest
              end_time={contest.end_time}
              created_at={contest.created_at}
              description={contest.description}
              hosted_by={contest.hosted_by}
              id={contest.id}
              title={contest.title}
              problems={contest.problems}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
