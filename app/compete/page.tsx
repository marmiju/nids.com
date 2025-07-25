
import { Contest } from "../components/contest/Contest";
import Link from "next/link";
import { getContest } from "@/lib/contest/Contest";
import { Loading } from "../components/loading/Loading";

const Page = async () => {
  const contestData = await getContest()

  return (
    <div className="max-w-[1280px] mx-auto p-4 ">
      <p className="bg-gray-200 p-2 text-black rounded-sm">All Contest</p>
      <div className="flex w-full text-center mb-4 p-2 rounded-sm drop-shadow-sm text-white  bg-gray-800">
        <p className="w-[15%]">id</p>
        <p className="w-[25%]"> Status</p>
        <p className="w-[20%]"> Problems</p>
        <p className="w-[40%]">end_time</p>
      </div>
      {contestData ? contestData?.map((contest) => {
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
      }) : <Loading/>}
    </div>
  );
};

export default Page;
