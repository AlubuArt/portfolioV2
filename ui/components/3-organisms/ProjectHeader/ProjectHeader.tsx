import React from "react";
import { Button } from "../../1-atoms/Button";
import { Heading } from "../../1-atoms/Heading";
import styles from "./ProjectHeader.module.css";

export interface ProjectHeaderProps {
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
  onClick,
}) => (
  <div role="ProjectHeader" className={styles.Project_container}>
    <Heading type="h1" tag="h1" className={styles.ProjectHeader_title}>
      {title}
    </Heading>
    <Heading type="h3" tag="h3" className={styles.ProjectHeader_description}>
      {description}
    </Heading>
    <div>
      <Button onClick={onClick} style={"CTA___primary"}>
        {"VISIT WEBSITE"}
      </Button>
      <Button onClick={onClick} style={"CTA___secondary"}>
        {"SEE ON GITHUB"}
      </Button>
    </div>
  </div>
);
