"use client";
import React, { useEffect, useState } from "react";
import { Ranking } from "../ranking/Ranking";

const RecentContest = () => {
  const [maxContestId, setMaxContestId] = useState<number | null>(null);

  useEffect(() => {
    const fetchMaxContestId = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/contest`);
        const contests = await res.json();

        const maxId = Math.max(...contests.map((c: any) => c.id));
        setMaxContestId(maxId);
      } catch (err) {
        console.error("Failed to fetch contest data:", err);
      }
    };

    fetchMaxContestId();
  }, [maxContestId]);

  return (
    <div>
      {maxContestId !== null ? (
        <Ranking contest_id={maxContestId} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecentContest;
