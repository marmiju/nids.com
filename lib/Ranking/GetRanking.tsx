import { Ranking } from "@/app/components/ranking/Ranking";
import React, { useEffect, useState } from "react";

export interface Rank_Props {
  contest_id: number;
}

export interface Type_Ranks {
  total_point: string;
  username: string;
  user_id: number;
  accepted_submissions: number;
  acceptance_rate: number;
  total_problems: number;
  accepted_problem_ids: string;
  total_submissions: number;
}

export const GetRanking = async ({ contest_id }: Rank_Props) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/contestRanking`,
    {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ contest_id }),
    }
  );
  const result = await response.json();
  console.log("ranking", result.rankings);
  return result.rankings;
};
