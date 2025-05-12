"use client";
import React, { useState } from "react";
import { noticetype } from "@/lib/notice/Notice";
interface props {
  notice: noticetype;
  idx: number;
}

export const SingleNotice: React.FC<props> = ({ notice, idx }) => {
  return (
    <div
      className={`
    ${idx % 2 == 0 ? "bg-slate-200" : "bg-slate-100"}
    py-2 px-4 rounded-sm
     `}
    >
      <div className="flex gap-x-2">
        <p className="font-medium  ">{notice.title}</p>
        <p className="rounded-md px-2  text-gray-400">{notice.author}</p>
      </div>
      <p className="text-slate-400 ">{notice.date.slice(0, 10)}</p>
    </div>
  );
};
