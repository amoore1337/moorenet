import { LinkCard } from "@/components/shared/LinkCard";
import React from "react";

interface Props {
  className?: string;
  projectName: string;
  projectDescription: React.ReactNode;
  projectTechnologies?: string[];
  icon: React.ReactNode;
  link: string;
}

export function ProjectLink(props: Props) {
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
