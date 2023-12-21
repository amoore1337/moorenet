import { MoonIcon, SunIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { Link } from "./shared/base/link";
import clsx from "clsx";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTheme } from "~/utils/color-mode";
import { useRequestInfo } from "~/utils/request-info";
import type { action as rootAction } from "~/root";
import { useFetcher } from "@remix-run/react";

export function NavBar() {
  return (
    <div className="flex items-center justify-between pt-8 md:pt-12">
      <Link to="/" className="ml-6 md:ml-12" displayActive={false}>
        <h1 className="text-2xl font-medium">John A. Moore</h1>
      </Link>
      <NavPill />
    </div>
  );
}

function NavPill() {
  return (
    <>
      <nav className="hidden md:flex items-center rounded-l-full dark:bg-slate-700 pr-12 bg-slate-200 transition-default">
        <NavList />
        <ThemeToggle />
      </nav>
      <div className="flex items-center md:hidden pr-6">
        <ThemeToggle className="mr-4" filled />
        <ExpandableNavMenu>
          <NavList />
        </ExpandableNavMenu>
      </div>
    </>
  );
}

function ThemeToggle({
  filled,
  className,
}: {
  filled?: boolean;
  className?: string;
}) {
  const { userPrefs } = useRequestInfo();
  const fetcher = useFetcher<typeof rootAction>();

  const optimisticMode = useTheme();
  const mode = optimisticMode ?? userPrefs.theme ?? "system";
  const nextMode = mode === "light" ? "dark" : "light";

  const toggleClasses = filled
    ? clsx(
        "p-3 overflow-hidden rounded-full outline-none",
        "dark:bg-slate-700 bg-slate-200",
      )
    : clsx(
        "p-3 overflow-hidden rounded-full outline-none",
        "border border-solid border-slate-200 dark:border-slate-700",
        "hover:dark:border-white hover:border-slate-700",
        "focus:dark:border-white focus:border-slate-700",
      );

  return (
    <fetcher.Form method="POST" action={fetcher.formAction}>
      <input type="hidden" name="theme" value={nextMode} />
      <button className={clsx(toggleClasses, className)} type="submit">
        <span className="sr-only">Switch to {nextMode} mode</span>
        <AnimatedColorModeIcon />
      </button>
    </fetcher.Form>
  );
}

interface ExpandedNavMenuProps {
  children: React.ReactNode;
  className?: string;
}

function ExpandableNavMenu({ children, className }: ExpandedNavMenuProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center default-text-color",
        className,
      )}
    >
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
              "transition-default animate-slideIn",
              "dark:bg-slate-900 rounded bg-slate-200",
              "border-2 border-solid border-slate-700",
              "will-change-[transform,opacity]",
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

function NavList() {
  return (
    <ul className="flex items-center gap-x-6 px-8 py-4">
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

function AnimatedColorModeIcon() {
  return (
    <div className="w-4 h-4 relative text-primary" aria-hidden>
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
