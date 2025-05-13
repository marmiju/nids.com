import { getNotices, noticesType } from "@/lib/notice/Notice";
import React from "react";
import { SingleNotice } from "../singlenotice/SingleNotice";

export const Notice = async () => {
  const noticedatas: noticesType = await getNotices();
  return (
    <div className=" space-y-1">
      <p className="text-lg text-gray-600  ">All Notices (Latest First)</p>
      {noticedatas.map((data, index) => {
        return <SingleNotice notice={data} key={index} idx={index} />;
      })}
    </div>
  );
};
