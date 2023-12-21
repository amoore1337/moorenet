import clsx from "clsx";
import type { ReactNode } from "react";
import { NavBar } from "./nav-bar";

interface Props {
  children: ReactNode;
}

export function AppLayout({ children }: Props) {
  return (
    <div
      className={clsx(
        "flex min-h-screen flex-col bg-background default-text-color transition-default",
      )}
    >
      <NavBar />
      {children}
    </div>
  );
}
