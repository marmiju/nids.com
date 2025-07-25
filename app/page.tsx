import { HeroData } from "@/lib/heroData/HeroData";
import { Award } from "./components/award/Award";
import Programs from "./components/Programs/Programs";
import { AboutData } from "@/lib/about/AboutData";
import VisMis from "./components/vis_mis/VisMis";
import RecentContest from "./components/contest/recentContest/recentContest";
import { Notice } from "./components/Notice/Notice/Notice";
import HeroCarousel from "./carosol/HeroCarosol";

import ChairmanMessage from "./components/chairmanMessage/ChairmanMessage";
import Loading from "./loading";
import { BreakingNews } from "./components/breakingNews/BrekingNews";

export default async function Home() {
  const [aboutData, herodata] = await Promise.all([AboutData(), HeroData()]);


  if (!aboutData || !herodata  ) {
    return <Loading />;
  }

  return (
    <main className="w-full">

      {/* beaking news 
      importent from components/ breking news
      props lates notice
      */}
         <BreakingNews/>


      {/* starting of section 1 hero section */}
      <div className="relative">
        <HeroCarousel herodata={herodata} key={'herodata'} />
      </div>


      {/* section 2 awareness */}
      <section id="award" className="relative z-1">
        <Award />
      </section >

     

      {/* section 3 drop message */}
      <ChairmanMessage/>

      {/* mivVis and Notice */}
      <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12  mt-10 max-w-[1280px] mx-auto">
        {/* vission and mission start */}
        <div className="col-span-1 md:col-span-6 lg:col-span-8">
          <VisMis goal={aboutData.goal} />
        </div>
        {/* ending of vision mission */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4 drop-shadow-md  rounded-sm select-secondary border  border-secondary p-2">
          <p className="py-2 text-text">Notice Board (Latest Fast) </p>
          <div className="h-[400px] overflow-scroll ">
            {/* <Link href="/notice" className="flex flex-col gap-2"> */}
              <Notice />
            {/* </Link> */}
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
