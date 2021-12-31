import React from "react";
import type { GetStaticProps, NextPage } from "next";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { CardListLayout } from "../ui/components/4-Layouts/ListLayout/CardListLayout";
import styles from "../styles/wrapper.module.css";
import { getAllProjects } from "../lib/graphcms";

export interface ProjectsProps {
  projects: Array<Models.Project>;
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.projects___container}>
      <PageHeader
        title={"project portfolio"}
        subtitle={
          "my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, UX/UI design, Figma"
        }
      />
      <CardListLayout projects={projects} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: { projects },
    revalidate: 60,
  };
};

export default Projects;
