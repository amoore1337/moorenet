import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import { MediumLogo } from "~/components/icons";
import { Link } from "~/components/shared/base/link";

export default function About() {
  return (
    <div className="mx-[10vw] py-16">
      <div className="max-w-7xl grid grid-cols-12 gap-x-6">
        <div className="col-span-full md:col-span-5 flex flex-col items-center">
          <h2 className="text-2xl font-medium flex items-center relative">
            About
          </h2>
          <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden flex items-center justify-center mt-6">
            <img
              src="/img/profile.jpg"
              className="max-w-none w-[350px] md:[500px]"
              alt="Profile pic"
            />
          </div>
        </div>
        <div className="col-span-full md:col-span-7 flex flex-col items-center pt-6 gap-4 md:pt-20">
          <p className="max-w-lg text-xl font-medium">
            Hi, I&apos;m Austin Moore, I&apos;m a software engineer with a
            passion for understanding how things work and teaching others.
          </p>

          <p className="max-w-lg text-lg">
            I love building things and enjoy any opportunity to collaborate with
            others that share an interest in technology.
          </p>

          <InfoPill className="mt-4" />
        </div>
      </div>
    </div>
  );
}

function InfoPill({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "dark:bg-slate-700 bg-slate-200 transition-default rounded sm:rounded-full",
        className,
      )}
    >
      <ul className="flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-4">
        <li>
          <Link
            className="flex items-center"
            target="_blank"
            to="https://github.com/amoore1337"
          >
            <GitHubLogoIcon
              width={20}
              height={20}
              className="mr-1"
              aria-hidden
            />
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center"
            target="_blank"
            to="https://www.linkedin.com/in/austin-moore-9625bba1/"
          >
            <LinkedInLogoIcon
              width={20}
              height={20}
              className="mr-1"
              aria-hidden
            />
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center"
            target="_blank"
            to="https://medium.com/@amoore1337"
          >
            <MediumLogo width={20} height={20} className="mr-1" aria-hidden />
            Medium
          </Link>
        </li>
        <li>
          <Link className="flex items-center" to="/resume.pdf" target="_blank">
            <FileTextIcon width={20} height={20} className="mr-1" aria-hidden />
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
