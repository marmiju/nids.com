


import { Contest, OneContest } from "@/lib/contest/Contest";
import { ContestTabs } from '@/app/components/ContestTabs/ContestTabs';

export default async function ContestEvent({ params }: { params: { contest: number } }) {
    const contestId = params.contest;
    const contest: Contest = await OneContest(contestId);

    return <ContestTabs contest={contest} />;
}
