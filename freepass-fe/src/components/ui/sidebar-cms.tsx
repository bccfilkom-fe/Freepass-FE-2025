"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Boxes,
  Webhook,
  UserRound,
  ArrowLeftFromLine,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function SidebarCMS() {
  const pathname = usePathname();
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <LayoutDashboard className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Products",
      href: "/dashboard/product",
      icon: (
        <Boxes className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Homepage",
      href: "/",
      icon: (
        <ArrowLeftFromLine className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 bg-white">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={`${
                  pathname === link.href
                    ? "bg-neutral-800 text-white rounded-md pl-1"
                    : "hover:bg-neutral-800/10 rounded-md"
                } `}
              />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Admin Dummy",
              href: "",
              icon: (
                <UserRound className="flex-shrink-0 bg-black text-white p-1 rounded-full" />
              ),
            }}
            className="cursor-default"
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = () => {
  return (
    <Link
      href=""
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 border-b-2 pb-4 border-neutral-300 cursor-default"
    >
      <Webhook />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Dummy Store
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href=""
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 border-b-2 pb-4 border-neutral-300 cursor-default"
    >
      <Webhook />
    </Link>
  );
};
