'use client'
import { HeroData } from "@/lib/heroData/HeroData";
import { useAuth } from "@/utils/auth";
import { HeroContent } from "./components/heroContent/HeroContent";
import Image from "next/image";
import { Award } from "./components/award/Award";

export default function Home() {
  const isLogged = useAuth();
  const herodata = HeroData()
  console.log(herodata)
  if (isLogged) {

  } else {
    console.log("User is not logged in");
  }

  return (
    <div className=" w-full  text-center  ">

      <div className="text-gray-200"
        style={{ backgroundImage: `url(${herodata.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        affiliated to National University; code: 3252

        <div
          className=" h-[600px] max-w-[1200px] mx-auto items-center justify-center grid p-10 rounded-2xl">
          <HeroContent data={herodata} />
        </div>
      </div>
      <Award />
    </div>
  );
}

