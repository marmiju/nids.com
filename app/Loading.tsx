import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

export const Loading = () => {
  return (
    <div className="flex w-full h-[500px] justify-center items-center">
      <DotLottieReact
        src="https://lottie.host/bdf9ef29-bd4c-4f2a-b28a-892c822238d0/QMSfWkX52V.lottie"
        loop
        autoplay
      />
    </div>
  );
};
