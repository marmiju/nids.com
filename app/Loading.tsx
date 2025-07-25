"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full h-[500px] justify-center items-center animate-pulse">
      <DotLottieReact
        src="https://lottie.host/2b17d0a6-0314-4fc3-9bbd-18f774a7e829/86r3s4WrSn.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Loading;
