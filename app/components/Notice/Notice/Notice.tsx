import { getNotices, noticesType } from "@/lib/notice/Notice";
import React from "react";
import { SingleNotice } from "../singlenotice/SingleNotice";
import { Loading } from "../../../loading";

export const Notice = async () => {
  const noticedatas: noticesType = await getNotices();
  if (!noticedatas){
      return <Loading/>
  }
  return (
    <div className=" ">
      <div className="">
        {noticedatas.map((data, index) => {
          return <SingleNotice notice={data} key={index} idx={index} />;
        })}
      </div>
    </div>
  );
};
