"use client";
import { NavItem, NavLinks  } from "@/lib/Navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(href + "/");

const navLink:NavItem[] = NavLinks

export const DesktopHeader = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className={`bg-primary p-4 text-background `}>
      <div className="max-w-[1280px] mx-auto flex gap-6 justify-around">
        {navLink.map((link) => (
          <div
            key={link.name}
            className="relative z-10"
            onMouseEnter={() => setOpenMenu(link.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            {
              link.href ? (
                <Link
                  href={link.href}
                  className={` ${
                    isActive(pathname, link.href)
                      ? "underline font-semibold  text-background  p-2 rounded"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <span className="px-4 py-2 cursor-default">
                  {link.name}
                </span>
              )
            }

            {link.children && openMenu === link.name && (
              <div className="absolute top-full truncate left-0  bg-primary text-secondary shadow-lg rounded">
                {link.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href!}
                    className={`block px-4 py-2 hover:bg-text hover:text-secondary ${
                      isActive(pathname, child.href!)
                        ? "bg-secondary font-semibold text-text"
                        : ""
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
