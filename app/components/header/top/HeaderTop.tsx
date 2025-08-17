import React from "react";
import { LogoTitle } from "../logotitle/LogoTitle";
import { DarkTogle } from "../../darktoggle/DarkToggle";

export const HeaderTop = () => {
  return (
    <div className="flex justify-between max-w-[1280px] mx-auto p-2">
      <div className="hidden md:flex w-full text-primary items-center">
        <LogoTitle />
      </div>
      <div className="text-sm flex md:grid justify-between items-center w-full  md:justify-end  text-end ">
        <div className="grid md:flex text-sm lg:gap-3 gap-2 font-medium text-text">
          <p>college Code: 3252</p>
          <p>EIIN নংঃ 122266</p>
        </div>
        <DarkTogle/>
      </div>
    </div>
  );
};
