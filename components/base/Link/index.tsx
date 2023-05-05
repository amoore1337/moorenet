import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface Props extends NextLinkProps {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, active, ...props }, ref) => {
    return (
      <NextLink
        className={clsx(
          className,
          styles.animatedUnderline,
          "transition duration-500 block relative focus:outline-none",
          "dark:text-white text-slate-900",
          { [styles.active]: active }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
