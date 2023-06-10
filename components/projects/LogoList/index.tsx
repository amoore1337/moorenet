import styles from "./styles.module.css";
import clsx from "clsx";
import React from "react";

import RemixLogo from "@/components/projects/icons/remixLogo.svg";
import NextJsLogo from "@/components/projects/icons/nextjsLogo.svg";
import TailwindLogo from "@/components/projects/icons/tailwindLogo.svg";
import RadixLogo from "@/components/projects/icons/radixLogo.svg";
import RadixLogoIcon from "@/components/projects/icons/radixLogoIcon.svg";
import ApolloLogo from "@/components/projects/icons/apolloLogo.svg";
import MuiLogo from "@/components/projects/icons/muiLogo.svg";
import ReactLogo from "@/components/projects/icons/reactLogo.svg";

interface Props {
  className?: string;
}

export function LogoList({ className }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-1 flex-wrap",
        className
      )}
    >
      <LibLink href="https://remix.run/">
        <RemixLogo width={90} />
      </LibLink>
      <LibLink href="https://nextjs.org/">
        <NextJsLogo width={100} />
      </LibLink>
      <LibLink href="https://react.dev/">
        <ReactLogo className="text-[#149eca]" width={40} />
      </LibLink>
      <LibLink href="https://tailwindcss.com/">
        <TailwindLogo width={120} />
      </LibLink>
      <LibLink href="https://www.radix-ui.com/">
        <span className="flex items-center">
          <RadixLogoIcon width={27} />
          <RadixLogo width={70} />
        </span>
      </LibLink>
      <LibLink href="https://mui.com/">
        <MuiLogo width={36} />
      </LibLink>
      <LibLink href="https://www.apollographql.com/">
        <ApolloLogo
          width={110}
          className="text-[#3f20ba] dark:text-white transition duration-500"
        />
      </LibLink>
    </div>
  );
}

function LibLink({ className, ...props }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={clsx(
        styles.libLink,
        "p-2 border border-solid rounded border-transparent",
        "hover:dark:border-white hover:border-sky-500",
        "hover:shadow-[0_3px_10px_0px_rgba(0,0,0,0.08)]",
        "dark:hover:shadow-[0_3px_10px_0px_rgba(2,6,23,1)]",
        className
      )}
      target="_blank"
      {...props}
    />
  );
}
