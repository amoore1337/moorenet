import { Poppins } from "next/font/google";
import React from "react";
import clsx from "clsx";
import { NavBar } from "@/components/NavBar";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        "flex min-h-screen flex-col bg-white dark:bg-slate-800 default-text-color",
        poppins.className
      )}
    >
      <NavBar />
      {children}
    </main>
  );
}
