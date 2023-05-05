import clsx from "clsx";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ExpandableNavMenu({ children, className }: Props) {
  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>
            <DotsVerticalIcon width={18} height={18} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={12}
            className={clsx(
              styles.container,
              "dark:bg-slate-900 rounded bg-slate-200",
              "border-2 border-solid border-slate-700"
            )}
          >
            {children}
            <DropdownMenu.Arrow className="fill-slate-700" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
