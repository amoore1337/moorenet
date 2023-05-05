import Image from "next/image";
import smtLogo from "@/components/projects/icons/smtLogo.png";
import auditNpmLogo from "@/components/projects/icons/auditNpmLogo.svg?url";
import homePlannerLogo from "@/components/projects/icons/homePlannerLogo.svg?url";
import { ProjectLink } from "@/components/projects/ProjectLink";
import { Link } from "@/components/base/Link";
import { GitHubLogoIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import { LogoList } from "@/components/projects/LogoList";

export default function Home() {
  return (
    <div className="mx-[10vw] py-16">
      <div className="max-w-7xl grid grid-cols-12 gap-x-6">
        <div className="col-span-full md:col-span-5 flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Projects</h2>

          <LogoList className="my-4" />

          <p className="w-full text-xl text-center">
            Personal projects are a way to experiment with new technologies and
            techniques while constructing helpful utilities. All projects are
            available on{" "}
            <span className="inline-block">
              <Link
                className="flex items-center"
                href="https://github.com/amoore1337"
              >
                GitHub
                <GitHubLogoIcon width={20} height={20} className="ml-1" />
              </Link>
            </span>
            .
          </p>
        </div>
        <div className="col-span-full md:col-span-7 flex flex-col items-center pt-6 gap-4">
          <ProjectLink
            projectName="Shape My Tasks"
            projectDescription={`
              A Shape Up inspired project management tool. Create and
              prioritize tasks while conveying progress in a visually
              meaningful way.
            `}
            projectTechnologies={[
              "React",
              "Apollo Client",
              "tailwindcss",
              "MUI",
              "NodeJS/Express",
              "Apollo Server",
              "Prisma",
              "Postgress",
            ]}
            link="https://shapemytasks.com/"
            icon={<Image src={smtLogo} alt="SMT Logo" width={60} height={60} />}
          />

          <ProjectLink
            projectName="Audit NPM"
            projectDescription={`
              A simple utility for quickly identifying outdated dependencies in a project,
              building reports, and selectively updating target package versions.
            `}
            projectTechnologies={[
              "Remix",
              "tailwindcss",
              "Radix",
              "Prisma",
              "SQLite",
            ]}
            link="https://audit-npm.moorenet.tech/"
            icon={
              <Image
                src={auditNpmLogo}
                alt="Auidit NPM Logo"
                width={60}
                height={60}
              />
            }
          />

          <ProjectLink
            projectName="Home Planner"
            projectDescription={`
              Calculators and budget visualization tools for building / buying a house.
              Reports provide projected savings over time and estimated monthly mortgages.
            `}
            projectTechnologies={["Remix", "tailwindcss", "Radix", "Chart.js"]}
            link="https://home-planner.moorenet.tech/"
            icon={
              <Image
                src={homePlannerLogo}
                alt="Home Planner Logo"
                width={60}
                height={60}
              />
            }
          />

          <ProjectLink
            projectName={
              <>
                MooreNet{" "}
                <span className="text-sm font-normal italic">(This site)</span>
              </>
            }
            projectDescription={`
              A place to collect my projects, passions, and ideas. Check this site out to
              see what I'm currently working on - or for a good laugh at my design skills. :)
            `}
            projectTechnologies={["Next.js", "tailwindcss"]}
            link="https://moorenet.tech/"
            icon={<QuestionMarkCircledIcon width={60} height={60} />}
          />
        </div>
      </div>
    </div>
  );
}
