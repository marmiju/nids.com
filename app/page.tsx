import { HeroData } from "@/lib/heroData/HeroData";
import { HeroContent } from "./components/heroContent/HeroContent";
import { Award } from "./components/award/Award";
import Programs from "./components/Programs/Programs";
import { AboutData, AboutUsData } from "@/lib/about/AboutData";
import VisMis from "./components/vis_mis/VisMis";
import RecentContest from "./components/contest/recentContest/recentContest";
import { Notice } from "./components/Notice/Notice/Notice";
import { Modal } from "./components/Modal/Modal";

export default async function Home() {
  const aboutData: AboutUsData = await AboutData();
  const herodata = HeroData();

  return (
    <div className="w-full ">
      {/* starting of section 1 hero section */}
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
      {/* ending of hero section */}

      {/* section 2 awareness */}
      <Award />
      {/* mivVis and Notice */}
      <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12  mt-10 max-w-[1280px] mx-auto">
        {/* vission and mission start */}
        <div className="col-span-1 md:col-span-6 lg:col-span-8">
          <VisMis goal={aboutData.goal} />
        </div>
        {/* ending of vision mission */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4  rounded-sm bg-white p-2">
          <p className="py-2">All notice (Latest Fast) </p>
          <div className="h-[400px] overflow-scroll">
            <Notice />
          </div>
        </div>

        {/* starting of Notice */}
      </div>
      <div>
        <Programs programs={aboutData.programs} />
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
