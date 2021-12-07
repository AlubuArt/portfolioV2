import React from "react";
import styles from "./ProjectDescription.module.css";
import { Heading } from "../../1-atoms/Heading";

export interface ProjectDescriptionProps {
  title: string;
  description: string;
  list: any[];
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  description,
  list,
}) => (
  <div
    role="ProjectDescription"
    className={styles.ProjectDescription_container}
  >
    <Heading type="h2" tag="h2" className={styles.ProjectDescription_title}>
      {title}
    </Heading>
    <Heading
      type="h3"
      tag="h3"
      className={styles.ProjectDescription_description}
    >
      {description}
    </Heading>
    <ul>
    {list.length > 0 ? (
      list.map((item, index) => {
        return <li className={styles.ProjectDescription_listItem} key={index}>{item}</li>;//TODO replace with custom list item
      })
    ) : (
      <></>
    )}
    </ul>
  </div>
);
