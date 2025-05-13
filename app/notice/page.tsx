import React from "react";
import { Notice } from "../components/Notice/Notice/Notice";

export const Page = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <p className="p-2">All Notice ar here By Time DESC (lates First)</p>
      <Notice />
    </div>
  );
};

export default Page;
