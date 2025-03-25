'use client'
import { useAuth } from "@/utils/auth";

export default function Home() {
  const isLogged = useAuth();  // ✅ Call the hook at the top

  if (isLogged) {

  } else {
    console.log("User is not logged in");
  }

  return (
    <div className="grid w-full ">
      <div className="max-w-[1200px] bg-[#FE4F2D] w-full mx-auto h-96 items-center shadow-2xl grid p-10 rounded-2xl">
        <div className="">
          <h1 className="font-bold">Welcome to NIDS</h1>
          <h1 className="text-4xl font-bold">The Next Gen Waiting for You</h1>
          <h1 className="text-sm">NIDS can best choice for you</h1>
          <button className=" p-2 rounded-sm mt-2">Get Free Consultation</button>
        </div>
      </div>
    </div>
  );
}

