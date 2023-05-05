import styles from "./styles.module.css";
import clsx from "clsx";
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"a"> {
  cardTitle: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function LinkCard({
  cardTitle,
  icon,
  children,
  className,
  ...props
}: Props) {
  return (
    <a
      className={clsx(
        styles.linkItem,
        "flex items-start py-5 pr-7 pl-3 w-full max-w-lg",
        "border border-solid border-slate-300 rounded text-slate-900",
        "hover:border-sky-500 active:border-sky-500",
        "dark:text-white dark:border-slate-500 dark:hover:border-white",
        "hover:shadow-[0_3px_10px_0px_rgba(0,0,0,0.08)]",
        "dark:hover:shadow-[0_3px_10px_0px_rgba(2,6,23,1)]",
        className
      )}
      {...props}
    >
      <div className="mr-3 mt-2 flex-none">{icon}</div>
      <span className="text-sm leading-5">
        <span className="block mb-2 text-base font-bold">{cardTitle}</span>
        {children}
      </span>
    </a>
  );
}
