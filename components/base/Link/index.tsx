import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface Props extends NextLinkProps {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, active, ...props }, ref) => {
    props.target;
    return (
      <NextLink
        className={clsx(
          className,
          styles.animatedUnderline,
          "default-text-color block relative focus:outline-none",
          { [styles.active]: active }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";
