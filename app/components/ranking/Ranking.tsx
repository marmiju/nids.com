"use client";
import { GetRanking, Type_Ranks } from "@/lib/Ranking/GetRanking";
import React, { useEffect, useState } from "react";

export const Ranking = () => {
  const [ranking, setRanking] = useState<Type_Ranks[]>([]);

  useEffect(() => {
    const fetchRanking = async () => {
      const rankingData = await GetRanking();
      console.log(rankingData);
      // If API returns { rank_types: [...] }, then:
      setRanking(rankingData || []);
    };

    fetchRanking();
  }, []);

  return (
    <div>
      <h2>Contest Ranking</h2>
      <table
        border={10}
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Total Points</th>
            <th>Total Submissions</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((user, index) => (
            <tr key={user.user_id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{user.username}</td>
              <td className="text-center">{user.total_point}</td>
              <td className="text-center">{user.total_submissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
