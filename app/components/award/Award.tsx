import React from "react";

export const Award = () => {
  return (
    <div className="  p-10 max-w-[1000px] backdrop-blur-sm bg-white/90  rounded-md text-black lg:mx-auto mx-4 shadow-md -mt-20 text-3xl font-bold flex justify-around">
      <h1 className=" text-center">
        {new Date().getFullYear() - 2010 + "+"}
        <span className="text-sm">
          {" "}
          <br />
          YEARS OF SUCCESS
        </span>
      </h1>
      <div className="border-r-2  "> </div>
      <h1 className=" text-center ">
        90+
        <span className="text-sm font-semibold">
          <br />
          Success Graduate
        </span>
      </h1>
      <div className="border-r-2"> </div>
      <h1 className=" text-center">
        20+
        <span className="text-sm">
          <br />
          Gain Awared
        </span>
      </h1>
    </div>
  );
};
