import { navprop } from "@/lib/Navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Links: React.FC<navprop> = ({ navs }) => {
  const path = usePathname();

  return (
    <div className="gap-2 space-x-4 ">
      {navs.map((data, i) => {
        return (
          <Link
            key={i}
            target={data.name == "Addmission" ? "_blank" : "_self"}
            className={`${
              data.path == path
                ? "text-white bg-green-900 px-2 py-1 rounded-sm font-semibold"
                : ""
            }`}
            href={data.path}
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
};
