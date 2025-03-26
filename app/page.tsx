'use client'
import { HeroData } from "@/lib/heroData/HeroData";
import { useAuth } from "@/utils/auth";
import { HeroContent } from "./components/heroContent/HeroContent";
import Image from "next/image";

export default function Home() {
  const isLogged = useAuth();  // ✅ Call the hook at the top
  const herodata = HeroData()
  console.log(herodata)
  if (isLogged) {

  } else {
    console.log("User is not logged in");
  }

  return (
    <div className=" w-full shadow-2xl text-center "
      style={{ backgroundImage: `url(${herodata.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div
        className="w-full h-screen max-w-[1200px] mx-auto items-center justify-center grid p-10 rounded-2xl">
        <HeroContent data={herodata} />

      </div>

    </div>
  );
}

