import React from "react";
import { Button } from "../../1-atoms/Button";
import { Heading } from "../../1-atoms/Heading";
import styles from "./PageHeader.module.css";
import { Paragraph } from "../../1-atoms/Paragraph";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  githubLink?: React.MouseEventHandler<HTMLButtonElement>;
  liveVersionLink?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "ProjectHeader" | "PageHeader" | "HeroHeader";
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  onClick,
  githubLink,
  liveVersionLink,
  type,
}) => (
 
    
  <div className={styles.pageHeader___container}>
    <Heading className={styles.PageHeader_title} type="h1" tag="h1">
      {title}
    </Heading>
    <Paragraph className={styles.PageHeader_subtitle} tag={"p"}>
      <div dangerouslySetInnerHTML={{ __html: subtitle }} />
    </Paragraph>
    {type === "HeroHeader" ? (
      <div>
        <Button onClick={onClick} style={"secondary"}>
          {"see projects"}
        </Button>
      </div>
    ) : type === "ProjectHeader" ? (
      <div>
        <Button onClick={liveVersionLink} style={"CTA___primary"}>
          {"VISIT WEBSITE"}
        </Button>
        <Button onClick={githubLink} style={"CTA___secondary"}>
          {"SEE ON GITHUB"}
        </Button>
      </div>
    ) : (
      ""
    )}
  </div>
 
);
