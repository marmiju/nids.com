
import { ContestTabs } from "@/app/components/contest/ContestTabs/ContestTabs";
import { Ranking } from "@/app/components/contest/ranking/Ranking";
import { Contest, getContest, OneContest } from "@/lib/contest/Contest";


export async function generateStaticParams() {
  const contests = await getContest();
  return contests.map((contest) => ({
    id: contest.id.toString(),
  }));
}

export default async function ContestEvent({ params }:{params:Promise<{id:string}>}) {
  const contestId = (await params).id
  const contest: Contest = await OneContest(Number(contestId));

  // if (!contest) {
  //   return <Loading />;
  // }

  return (
    <div className="px-4">
      <ContestTabs contest={contest} />
      <Ranking contest_id={contest.id} />
    </div>
  );
}
