import { LogoList } from "./logo-list";
import { Link } from "~/components/shared/base/link";
import { LinkCard } from "~/components/shared/link-card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  AuditNpmLogo,
  HousePlannerLogo,
  MoorenetLogo,
} from "~/components/icons";

export default function Index() {
  return (
    <main>
      <div className="mx-[10vw] py-16">
        <div className="max-w-7xl grid grid-cols-12 gap-x-6">
          <div className="col-span-full md:col-span-5 flex flex-col items-center">
            <h2 className="text-2xl font-medium flex items-center relative">
              Projects
            </h2>

            <p className="w-full text-xl text-center my-4">
              I enjoy experimenting with new technologies and techniques while
              constructing helpful utilities. All projects are available on{" "}
              <span className="inline-block">
                <Link
                  className="flex items-center"
                  target="_blank"
                  to="https://github.com/amoore1337"
                >
                  GitHub
                  <GitHubLogoIcon width={20} height={20} className="ml-1" />
                </Link>
              </span>
              .
            </p>

            <LogoList className="mt-3 md:mt-8" />
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
              link="https://shapemytasks.com/home"
              icon={
                <img
                  src="/img/smtLogo.png"
                  width={60}
                  height={60}
                  alt="ShapeMyTasks Logo"
                />
              }
            />

            <ProjectLink
              projectName="Audit NPM"
              projectDescription={`
              A simple utility for quickly identifying outdated npm dependencies,
              building reports, and selectively updating target package versions.
            `}
              projectTechnologies={[
                "Remix",
                "tailwindcss",
                "Radix",
                "Prisma",
                "Redis",
                "SQLite",
              ]}
              link="https://audit-npm.moorenet.tech/"
              icon={<AuditNpmLogo width={60} height={60} />}
            />

            <ProjectLink
              projectName="House Planner"
              projectDescription={`
              Calculators and budget visualization tools for building / buying a house.
              Reports provide projected savings over time and estimated monthly mortgages.
            `}
              projectTechnologies={[
                "Remix",
                "tailwindcss",
                "Radix",
                "Chart.js",
              ]}
              link="https://house-planner.moorenet.tech/"
              icon={<HousePlannerLogo width={60} height={60} />}
            />

            <ProjectLink
              projectName={
                <>
                  MooreNet{" "}
                  <span className="text-sm font-normal italic">
                    (This site)
                  </span>
                </>
              }
              projectDescription={`
              A place to collect my projects, passions, and ideas. Check this site out to
              see what I'm currently working on - or for a good laugh at my design skills. :)
            `}
              projectTechnologies={["Next.js", "tailwindcss"]}
              link="https://moorenet.tech/"
              icon={<MoorenetLogo width={60} height={60} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

interface ProjectListProps {
  className?: string;
  projectName: React.ReactNode;
  projectDescription: React.ReactNode;
  projectTechnologies?: string[];
  icon: React.ReactNode;
  link: string;
}

export function ProjectLink(props: ProjectListProps) {
  return (
    <LinkCard
      className={props.className}
      cardTitle={props.projectName}
      icon={props.icon}
      href={props.link}
      target="_blank"
    >
      {props.projectDescription}
      {!!props.projectTechnologies?.length && (
        <div className="mt-3 text-xs">
          <span className="font-bold mr-2 text-sm">Technologies:</span>
          {props.projectTechnologies.join(", ")}
        </div>
      )}
    </LinkCard>
  );
}
