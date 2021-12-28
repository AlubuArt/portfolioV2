import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PageHeader } from "../../ui/components/3-organisms/PageHeader";
import { ProjectDescription } from "../../ui/components/3-organisms/ProjectDescription";
import { Gallery } from "../../ui/components/3-organisms/Gallery";
import styles from "../../styles/wrapper.module.css";
import { getAllProjectsWithSlug, getProject } from "../../lib/graphcms";

export interface ProjectPageProps {
  project: Models.Project;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const handleExternalRouting = (url: string) => {
    document.location.href = url;
  };

  //console.log(project.projectPictures[0]?.url)
  return (
    <div className={styles.wrapper}>
      <PageHeader
        title={project.projectTitle}
        subtitle={project.aboutText}
        type={"ProjectHeader"}
        githubLink={() => handleExternalRouting(project.seGithubURL)}
        liveVersionLink={() => handleExternalRouting(project.seLiveUrl)}
      ></PageHeader>
      <Gallery slides={project.projectPictures}></Gallery>

      <ProjectDescription
        title="about this project"
        description={project.description}
        list={[]} //TODO: should be made optional
      ></ProjectDescription>

      <ProjectDescription
        title="tech used"
        description="in this project the following technologies was used"
        list={[project.key1, project.key2, project.key3]} //TODO: make it possible to add more than three keys
      ></ProjectDescription>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProject(params?.slug);

  return {
    props: { project: data.project },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjectsWithSlug();
  return {
    paths: projects.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export default ProjectPage;
