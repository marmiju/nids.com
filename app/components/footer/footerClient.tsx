"use client";

import { GetInfoResponse, InfoData } from "@/lib/infoData/InfoData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Foot1 } from "./FooterSections/Foot1";
import { Foot2 } from "./FooterSections/Foot2";
import { Foot3 } from "./FooterSections/Foot3";
import { setInfo } from "@/app/redux/InfoSlice";
import { info } from "node:console";

interface Props {
  infodata: GetInfoResponse;
}

export const FooterClient = ({ infodata }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setInfo({
        infoData: infodata.infoData,
        socialData: infodata.socialData,
        siteLogo: infodata.infoData.logo,
      })
    );
  }, [dispatch, infodata]);

  return (
    <>
      <Foot1 info={infodata} />
      <Foot3 data={infodata.infoData} />
      <Foot2 />
    </>
  );
};
