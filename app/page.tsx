import { HeroData } from "@/lib/heroData/HeroData";
import { HeroContent } from "./components/heroContent/HeroContent";
import { Award } from "./components/award/Award";
import Programs from "./components/Programs/Programs";
import { AboutData, AboutUsData } from "@/lib/about/AboutData";
import VisMis from "./components/vis_mis/VisMis";
import RecentContest from "./components/contest/recentContest/recentContest";
import { Notice } from "./components/Notice/Notice/Notice";
import Image from "next/image";
import banner from "@/public/banner.png"

export default async function Home() {
  const [aboutData, herodata] = await Promise.all([AboutData(), HeroData()]);

  return (
    <main className="w-full">
      {/* starting of section 1 hero section */}
      <div className="relative w-full h-[600px] md:h-screen">
        <Image
          src={banner}
          alt="Hero Background"
          fill
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-start">

          <HeroContent data={herodata} />

        </div>
      </div>
      {/* ending of hero section */}

      {/* section 2 awareness */}
      <div>
        <Award />
      </div>
      {/* mivVis and Notice */}
      <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12  mt-10 max-w-[1280px] mx-auto">
        {/* vission and mission start */}
        <div className="col-span-1 md:col-span-6 lg:col-span-8">
          <VisMis goal={aboutData.goal} />
        </div>
        {/* ending of vision mission */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4 drop-shadow-md  rounded-sm select-secondary border  border-secondary p-2">
          <p className="py-2 text-text">Notice Board (Latest Fast) </p>
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
        <p className="text-center text-xl text-gray-400 font-semibold mt-20 stroke-black stroke-3">
          LATEST CONTEST RANK
        </p>
        <RecentContest />
      </div>
    </main>
  );
}
