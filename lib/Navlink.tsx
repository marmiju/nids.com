import Link from "next/link";
import React from "react";

export type Navtype = nav[];

export type nav = {
  path: string;
  name: string;
};
export type navprop = {
  navs: Navtype;
};

export const Navlink = () => {
  // http://app11.nu.edu.bd/
  const link = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/admission", name: "Addmission" },
    { path: "/programs", name: "Offer Programs" },
    { path: "/teachers", name: "Teachers" },
    { path: "/notice", name: "Notice" },
    { path: "/ressearch", name: "Research" },
    { path: "/contest", name: "contact" },
  ];
  return link;
};
