import {
  NavLink as RemixLink,
  type NavLinkProps as RemixLinkProps,
} from "@remix-run/react";
import React from "react";
import clsx from "clsx";

interface Props extends RemixLinkProps {
  displayActive?: boolean;
  className?: string;
  children?: React.ReactNode;
  target?: string;
  rel?: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, displayActive = true, ...props }, ref) => {
    return (
      <RemixLink
        className={({ isActive }) =>
          clsx(
            className,
            "default-text-color block relative focus:outline-none",
            "after:content-[''] after:absolute after:block after:w-full",
            "after:h-[2px] after:left-0 after:-bottom-[4px]",
            "after:scale-x-0 after:origin-left after:transition-transform",
            "after:duration-[250ms] after:ease-linear",
            "hover:after:scale-x-100 hover:after:bg-current",
            "focus:after:scale-x-100 focus:after:bg-current",
            displayActive && isActive && "after:scale-x-100 after:bg-current",
          )
        }
        ref={ref}
        {...props}
      />
    );
  },
);

Link.displayName = "Link";

// .animatedUnderline::after {
//   @apply absolute block w-full h-[2px] left-0 -bottom-[4px];
//   content: "";
//   transform: scaleX(0);
//   transform-origin: left;
//   transition: transform 0.25s ease;
// }
// .active::after,
// .animatedUnderline:hover::after,
// .animatedUnderline:focus::after {
//   transform: scaleX(1);
//   @apply bg-current;
// }
