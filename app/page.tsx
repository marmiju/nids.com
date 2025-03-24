'use client'
import { useAuth } from "@/utils/auth";

export default function Home() {
  const isLogged = useAuth();  // ✅ Call the hook at the top

  if (isLogged) {
    console.log("User is logged in");
  } else {
    console.log("User is not logged in");
  }

  return (
    <div className="grid">
      <div className="max-w-1200 mx-auto h-screen items-center grid text-6xl font-bold">
        <h1>Welcome to NIDS</h1>
      </div>
    </div>
  );
}

