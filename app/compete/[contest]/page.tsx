import { useState } from "react";
import { Problem } from "@/app/components/problem/Problem";
import { Contest, OneContest } from "@/lib/contest/Contest";
import { ContestTabs } from "@/app/components/contest/ContestTabs/ContestTabs";
import { Loading } from "@/app/Loading";
import { Ranking } from "@/app/components/contest/ranking/Ranking";

export default async function ContestEvent({
  params,
}: {
  params: { contest: number };
}) {
  const contestId = params.contest;
  const contest: Contest = await OneContest(contestId);

  if (!contest) return <Loading />;

  return (
    <div className="px-4">
      <ContestTabs contest={contest} />
      <Ranking contest_id={contest.id}></Ranking>
    </div>
  );
}
