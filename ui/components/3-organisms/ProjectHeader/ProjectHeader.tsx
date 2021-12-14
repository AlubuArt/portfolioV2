import React from "react";
import { Button } from "../../1-atoms/Button";
import { Heading } from "../../1-atoms/Heading";
import styles from "./ProjectHeader.module.css";
import { Paragraph } from "../../1-atoms/Paragraph";
import { Container } from "../../4-Layouts/Container";

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
  <Container className={styles.Project_container} width={"lg"}>
    <Heading type="h1" tag="h1" className={styles.ProjectHeader_title}>
      {title}
    </Heading>
    <Paragraph className={styles.ProjectHeader_description} tag={"p"}>
      {description}
    </Paragraph>

    <Button onClick={onClick} style={"CTA___primary"}>
      {"VISIT WEBSITE"}
    </Button>
    <Button onClick={onClick} style={"CTA___secondary"}>
      {"SEE ON GITHUB"}
    </Button>
  </Container>
);
