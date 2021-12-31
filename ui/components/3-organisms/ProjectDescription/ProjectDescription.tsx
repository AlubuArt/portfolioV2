import React from "react";
import styles from "./ProjectDescription.module.css";
import { Heading } from "../../1-atoms/Heading";
import { Paragraph } from "../../1-atoms/Paragraph";
import { Container } from "../../4-Layouts/Container";

export interface ProjectDescriptionProps {
  title: string;
  description: string;
  list: [];
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  title,
  description,
  list,
}) => (
  <div className={styles.ProjectDescription___container}>
    <Heading type="h2" tag="h2" className={styles.ProjectDescription_title}>
      {title}
    </Heading>
    <Paragraph className={styles.ProjectDescription_description} tag={"p"}>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Paragraph>

    <ul>
      {list.length > 0 ? (
        list.map((item, index) => {
          return (
            <li className={styles.ProjectDescription_listItem} key={index}>
              {item}
            </li>
          ); //TODO replace with custom list item
        })
      ) : (
        <></>
      )}
    </ul>
  </div>
);
