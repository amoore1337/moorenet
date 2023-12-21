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
  style = {},
  ...props
}: Props) {
  return (
    <a
      className={clsx(
        "ElevatedCard",
        "flex items-start py-5 pr-7 pl-3 w-full max-w-lg",
        "dark:text-white text-slate-900 dark:border-slate-500 border-slate-300",
        className,
      )}
      {...props}
    >
      <div className="mr-3 mt-2 flex-none" aria-hidden>
        {icon}
      </div>
      <span className="text-sm leading-5">
        <span className="block mb-2 text-base font-semibold">{cardTitle}</span>
        {children}
      </span>
    </a>
  );
}
