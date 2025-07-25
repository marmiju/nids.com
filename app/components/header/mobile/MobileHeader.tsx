"use client";

import React, { useState } from "react";
import { LogoTitle } from "../logotitle/LogoTitle";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/lib/Navlink";

// Navigation item type


// Sample navigation
const navLinks = NavLinks;

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="w-full bg-primary text-background px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="text-background">
          <LogoTitle />
        </div>
        <div className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mt-4 space-y-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex justify-between items-center">
                {
                  link.href ? (
                    <Link
                      href={link.href}
                      className={`block py-2 px-4 rounded text-lg ${
                        pathname === link.href
                          ? "bg-white text-primary font-semibold"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="block py-2 px-4 rounded text-lg">
                      {link.name}
                    </span>
                  )
                }
                {link.children && (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="px-2 text-xl"
                  >
                    {activeDropdown === link.name ? "−" : "+"}
                  </button>
                )}
              </div>
              {link.children && activeDropdown === link.name && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href || "#"}
                      className={`block py-1 px-4 rounded text-lg ${
                        pathname === child.href
                          ? "bg-white text-primary font-semibold"
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
      )}
    </div>
  );
};
