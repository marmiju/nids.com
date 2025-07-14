import { Navlink } from "@/lib/Navlink";
import Link from "next/link";
import React from "react";

export const Foot2 = () => {
  const navlink = Navlink();
  return (
    <div className="flex flex-col text-center space-y-2 font-semibold text-xl">
      Links
      {navlink.map((data, index) => {
        return (
          <Link
            key={index}
            className="text-black  font-normal text-sm underline hover:text-slate-400"
            href={data.path}
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
};
