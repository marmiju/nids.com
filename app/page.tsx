"use client";
import { HeroData } from "@/lib/heroData/HeroData";
import { useAuth } from "@/utils/auth";
import { HeroContent } from "./components/heroContent/HeroContent";
import { Award } from "./components/award/Award";
import Programs from "./components/Programs/Programs";
import { AboutData, AboutUs } from "@/lib/about/AboutData";
import VisMis from "./components/vis_mis/VisMis";
import RecentContest from "./components/recentContest/recentContest";

export default function Home() {
  const aboutData: AboutUs = AboutData;
  const isLogged = useAuth();
  const herodata = HeroData();

  console.log(herodata);
  if (isLogged) {
  } else {
    console.log("User is not logged in");
  }

  return (
    <div className="w-full ">
      <div
        className="text-center text-slate-100 font-medium text-sm bg-slate-200 py-2"
        style={{
          backgroundImage: `url(${herodata.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        affiliated to National University; code: 3252
        <div className=" h-[600px] max-w-[1200px] mx-auto items-center justify-center text-center grid p-10 rounded-2xl">
          <HeroContent data={herodata} />
        </div>
      </div>
      <Award />
      <div>
        <Programs programs={aboutData.programs} />
      </div>
      <div className="max-w-[1280px] mx-auto mt-20 justify-center">
        <p className="text-center text-gray-400 font-bold  text-xl md:text-3xl ">
          Our Vision & mission
        </p>
        <VisMis goal={aboutData.goal} />
      </div>
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-xl text-gray-400 font-semibold mt-20">
          recent Weekly Contest Rank
        </p>
        <RecentContest />
      </div>
    </div>
  );
}
