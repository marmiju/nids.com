"use client";
import Link from "next/link";
import React, {  useState } from "react";

import { Mobile } from "./Mobile";
import { MdManageAccounts, MdOutlineAccountCircle } from "react-icons/md";
import { useAuth } from "@/utils/auth";
import { Desktop } from "./Desktop";
import { Navlink } from "@/lib/Navlink";
import { useRouter } from "next/navigation";
import { DarkTogle } from "../darktoggle/DarkToggle";

const Header = () => {
  const [isopen, setIsOpen] = useState(false);
  const router = useRouter();
  const islogged = useAuth();
  const navlink = Navlink();

  return (
    <div className=" z-50 flex justify-end max-w-[1200px] mx-auto text-text">
      {/* for Mobile */}
      <Mobile navs={navlink} />

      {/* for desktop or tablate */}
      {}
      <Desktop navs={navlink} />
      <div className={`relative flex justify-end text-3xl gap-4 `}>
        {/* Profile  */}
        <div
          className={`hover:cursor-pointer gap-4  items-center justify-center rounded-full flex `}
        >
          <button onClick={() => setIsOpen(!isopen)}>
            {islogged ? <MdManageAccounts /> : <MdOutlineAccountCircle />}
          </button>
          
            <DarkTogle />
          
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute mx-4  right-0 text-sm font-medium gap-2 rounded   top-12 shadow-xl border-gray-300   border  bg-white  overflow-hidden  ${
            isopen ? "grid" : "hidden"
          } `}
        >
          {islogged ? (
            <div>
              <button
                onClick={() => router.replace("/profile")}
                className="backdrop-blur-md hover:cursor-pointer py-2 text-white bg-black px-4 block"
              >
                {`U'r Profile`}
              </button>
              <div className=" hover:cursor-pointer bg-red-700 py-2 text-white px-4  block">
                Log Out
              </div>
            </div>
          ) : (
            <>
              <Link
                className="backdrop-blur-md hover:cursor-pointer px-4 p-1 block"
                href={"login"}
              >
                Log in
              </Link>
              <Link
                className="backdrop-blur-md hover:cursor-pointer px-4 p-1 block"
                href={"register"}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
