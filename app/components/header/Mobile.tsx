"use client";
import { Navlink, navprop } from "@/lib/Navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Sitelogo } from "./sitelogo";

export const Mobile: React.FC<navprop> = ({ navs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  function handledrawer() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="md:hidden z-50">
      <div className=" flex justify-between  w-full hover:cursor-pointer text-4xl m-2 ">
        <div onClick={handledrawer}>
          {<HiMenuAlt2 className={`${isOpen ? "color-orange rounded" : ""}`} />}
          <div
            className={`${
              isOpen ? "" : "-ml-64"
            } absolute text-sm transition-all duration-300 grid gap-2 m-2 rounded overflow-ellipsis border-0.5 border-gray-400 shadow-2xl bg-white/40 backdrop-blur-2xl`}
          >
            {navs.map((data, i) => {
              return (
                <Link
                  key={i}
                  className={`${
                    data.path == path
                      ? " bg-slate-200   text-black   text-sm "
                      : " text-black"
                  } p-1 px-4 `}
                  href={data.path}
                >
                  ⨀ {data.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
