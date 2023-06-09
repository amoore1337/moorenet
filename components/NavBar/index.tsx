"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import React from "react";
import { Link } from "../base/Link";
import { useRouter } from "next/router";
import { ExpandableNavMenu } from "./ExpandableNavMenu";

export function NavBar() {
  return (
    <div className="flex items-center justify-between pt-8 md:pt-12">
      <Link href="/" className="ml-6 md:ml-12">
        <h1 className="text-2xl font-semibold">John A. Moore</h1>
      </Link>
      <NavPill />
    </div>
  );
}

const colorMode = ColorModePreference();

function NavPill() {
  const router = useRouter();

  const handleColorModeToggle = () => {
    colorMode.toggle();
  };

  return (
    <>
      <nav className="hidden md:flex items-center rounded-l-full dark:bg-slate-700 pr-12 bg-slate-200 transition-default">
        <NavList activePath={router.pathname} />
        <button
          onClick={handleColorModeToggle}
          className={clsx(
            "p-3 overflow-hidden rounded-full outline-none",
            "border border-solid border-slate-200 dark:border-slate-700",
            "hover:dark:border-white hover:border-slate-700",
            "focus:dark:border-white focus:border-slate-700"
          )}
        >
          <AnimatedColorModeIcon />
        </button>
      </nav>
      <div className="flex items-center md:hidden pr-6">
        <button
          onClick={handleColorModeToggle}
          className={clsx(
            "p-3 overflow-hidden rounded-full outline-none mr-4",
            "dark:bg-slate-700 bg-slate-200"
          )}
        >
          <AnimatedColorModeIcon />
        </button>
        <ExpandableNavMenu>
          <NavList activePath={router.pathname} />
        </ExpandableNavMenu>
      </div>
    </>
  );
}

function NavList({ activePath }: { activePath: string }) {
  return (
    <ul className="flex items-center gap-x-6 px-8 py-4">
      <li>
        <Link href="/" active={activePath === "/"}>
          Projects
        </Link>
      </li>
      <li>
        <Link href="/blog" active={activePath === "/blog"}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/about" active={activePath === "/about"}>
          About
        </Link>
      </li>
    </ul>
  );
}

function AnimatedColorModeIcon() {
  return (
    <div className="w-4 h-4 relative">
      <span
        className="absolute inset-0 rotate-90 dark:rotate-0 transition duration-700"
        style={{ transformOrigin: "50% 100px" }}
      >
        <MoonIcon />
      </span>
      <span
        className="absolute inset-0 rotate-0 dark:-rotate-90 duration-700"
        style={{ transformOrigin: "50% 100px" }}
      >
        <SunIcon />
      </span>
    </div>
  );
}

function ColorModePreference() {
  return {
    get(): "dark" | "light" {
      if (typeof window !== "undefined" && "theme" in localStorage) {
        return localStorage.theme;
      } else if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return "dark";
    },
    toggle() {
      const updatedMode = this.get() === "dark" ? "light" : "dark";
      if (updatedMode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.theme = updatedMode;
    },
  };
}
