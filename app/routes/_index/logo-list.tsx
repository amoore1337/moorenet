import clsx from "clsx";
import React from "react";
import {
  ApolloLogo,
  MuiLogo,
  NextJsLogo,
  RadixIconLogo,
  RadixLogo,
  ReactLogo,
  RemixLogo,
  TailwindLogo,
} from "~/components/icons";

interface Props {
  className?: string;
}

export function LogoList({ className }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-1 flex-wrap",
        "border border-current rounded py-4 relative",
        className,
      )}
    >
      <div className="absolute -top-3 left-4 text-sm px-2 dark:bg-slate-800 bg-white transition-default">
        Technologies I&apos;m currently exploring
      </div>
      <LibLink aria-label="Remix" href="https://remix.run/">
        <RemixLogo width={90} />
      </LibLink>
      <LibLink aria-label="NextJS" href="https://nextjs.org/">
        <NextJsLogo width={100} />
      </LibLink>
      <LibLink aria-label="React" href="https://react.dev/">
        <ReactLogo className="text-[#149eca]" width={40} />
      </LibLink>
      <LibLink aria-label="TailwindCSS" href="https://tailwindcss.com/">
        <TailwindLogo width={120} />
      </LibLink>
      <LibLink aria-label="Remix" href="https://www.radix-ui.com/">
        <span className="flex items-center">
          <RadixIconLogo width={27} />
          <RadixLogo width={70} />
        </span>
      </LibLink>
      <LibLink aria-label="Material UI" href="https://mui.com/">
        <MuiLogo width={36} />
      </LibLink>
      <LibLink
        aria-label="Apollo GraphQL"
        href="https://www.apollographql.com/"
      >
        <ApolloLogo
          width={110}
          className="text-[#3f20ba] dark:text-white transition duration-500"
        />
      </LibLink>
    </div>
  );
}

function LibLink({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={clsx(
        "ElevatedCard",
        "border-transparent",
        "p-2 border border-solid rounded border-transparent",
        "hover:dark:border-white hover:border-sky-500",
        "hover:shadow-[0_3px_10px_0px_rgba(0,0,0,0.08)]",
        "dark:hover:shadow-[0_3px_10px_0px_rgba(2,6,23,1)]",
        className,
      )}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}
