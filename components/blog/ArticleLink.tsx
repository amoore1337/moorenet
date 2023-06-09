import { LinkCard } from "@/components/shared/LinkCard";
import React from "react";

interface Props {
  className?: string;
  articleTitle: React.ReactNode;
  articleDescription: React.ReactNode;
  icon: React.ReactNode;
  link: string;
}

export function ArticleLink(props: Props) {
  return (
    <LinkCard
      className={props.className}
      cardTitle={props.articleTitle}
      icon={props.icon}
      href={props.link}
      target="_blank"
    >
      {props.articleDescription}
    </LinkCard>
  );
}
