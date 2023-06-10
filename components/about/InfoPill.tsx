import { Link } from "@/components/base/Link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import MediumLogo from "@/components/about/medium-icon.svg";
import clsx from "clsx";

export function InfoPill({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "dark:bg-slate-700 bg-slate-200 transition-default rounded sm:rounded-full",
        className
      )}
    >
      <ul className="flex flex-col sm:flex-row sm:items-center px-6 py-4 gap-4">
        <li>
          <Link
            className="flex items-center"
            target="_blank"
            href="https://github.com/amoore1337"
          >
            <GitHubLogoIcon width={20} height={20} className="mr-1" />
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center"
            target="_blank"
            href="https://www.linkedin.com/in/austin-moore-9625bba1/"
          >
            <LinkedInLogoIcon width={20} height={20} className="mr-1" />
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center"
            target="_blank"
            href="https://medium.com/@amoore1337"
          >
            <MediumLogo width={20} height={20} className="mr-1" />
            Medium
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center"
            href="/resume.pdf"
            target="_blank"
          >
            <FileTextIcon width={20} height={20} className="mr-1" />
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}
