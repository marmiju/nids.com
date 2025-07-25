import { Contest, OneContest } from "@/lib/contest/Contest";
import { ContestTabs } from "@/app/components/contest/ContestTabs/ContestTabs";
import { Ranking } from "@/app/components/contest/ranking/Ranking";
import Loading from "@/app/loading";

export default async function ContestEvent({ params }: { params: { contest: string } }) {
  const contestId = Number(params.contest); // ✅ string to number conversion

  if (isNaN(contestId)) {
    return <div>Invalid Contest ID</div>;
  }

  const contest: Contest = await OneContest(contestId);

  if (!contest) {
    return <Loading />;
  }

  return (
    <div className="px-4">
      <ContestTabs contest={contest} />
      <Ranking contest_id={contest.id} />
    </div>
  );
}
