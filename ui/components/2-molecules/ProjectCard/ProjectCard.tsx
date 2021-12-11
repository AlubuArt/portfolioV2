import React from "react";
import styles from "./ProjectCard.module.css";
import classNames from "classNames";
import { Card } from "../../1-atoms/Card";
import { Heading } from "../../1-atoms/Heading";
import{ Button }from "../../1-atoms/Button";

export interface ProjectCardProps {
  className?: string;
  title: string;
  description?: string;
  image: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  onClick
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
         
            <Button style={"primary"} onClick={onClick}>more...</Button>
        
      </div>
    </Card>
  </>
);
