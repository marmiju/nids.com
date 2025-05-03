import { Ranking } from "@/app/components/ranking/Ranking";
import React, { useEffect, useState } from "react";

interface ran_props {
  contest_id: number;
}

export interface type_ranks {
  total_point: string;
  username: string;
  user_id: number;
  total_submissions: number;
}
// { contest_id }: ran_props

export const GetRanking = async () => {
  const contest_id = 14;
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
