import { navprop } from "@/lib/Navlink";

import React from "react";
import { Links } from "./Link";
import { Sitelogo } from "./sitelogo";

export const Desktop: React.FC<navprop> = ({ navs }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="  hidden md:flex justify-between items-center mr-10  w-full  mx-auto">
        <Sitelogo />

        <Links navs={navs} />
      </div>
    </div>
  );
};
