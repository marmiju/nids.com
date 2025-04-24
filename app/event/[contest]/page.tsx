

import { useState } from 'react';
import { Problem } from "@/app/components/problem/Problem";
import { Contest, OneContest } from "@/lib/contest/Contest";
import { ContestTabs } from '@/app/components/ContestTabs/ContestTabs';
import { Loading } from '@/app/components/Loading/Loading';

export default async function ContestEvent({ params }: { params: { contest: number } }) {
    const contestId = params.contest;
    const contest: Contest = await OneContest(contestId);

    if (!contest) return <Loading />;

    return <ContestTabs contest={contest} />;
}
