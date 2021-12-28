import React from "react";
import styles from "./ProjectDescription.module.css";
import { Heading } from "../../1-atoms/Heading";
import { Paragraph } from "../../1-atoms/Paragraph";
import { Container } from "../../4-layouts/Container";

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
  <Container  width={"full"} spacing={'lg'}>
    <Heading type="h2" tag="h2" className={styles.ProjectDescription_title}>
      {title}
    </Heading>
    <Paragraph className={styles.ProjectDescription_description} tag={"p"}>
      {description}
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
  </Container>
);
