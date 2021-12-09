import React from "react";
import styles from "./ProjectCard.module.css";
import classNames from "classNames";
import { Card } from "../../1-atoms/Card";
import { Heading } from "../../1-atoms/Heading";

export interface ProjectCardProps {
  className?: string;
  title: string;
  description?: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => (
  <>
    <Card
      image={image}
      className={styles.project_card}
      size={"sm"}
      type={"project_card"}
      onClick={() => {}}
    >
      <div className={styles.info}>
        <Heading className={styles.infoTitle} type={"h2"} tag={"h2"}>
          {title}
        </Heading>
        <Heading className={styles.infoDescription} type={"h3"} tag={"h3"}>
          {description}
        </Heading>
        {/*  <div>
            <Button></Button>
            <Button></Button>
        </div> */}
      </div>
    </Card>
  </>
);
