import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PageHeader } from "../../ui/components/3-organisms/PageHeader";
import { ProjectDescription } from "../../ui/components/3-organisms/ProjectDescription";
import { Gallery } from "../../ui/components/3-organisms/Gallery";
import styles from "../../styles/wrapper.module.css";
import {
  getAllProjects,
  getAllProjectsWithSlug,
  getProject,
  getProjectsAndMorweProjects,
} from "../../lib/graphcms";

export interface ProjectPageProps {
  project: Models.Project;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const handleExternalRouting = (url: string) => {
    document.location.href = url;
  };

  return (
    <div className={styles.wrapper}>
      <PageHeader
        title={project.projectTitle}
        subtitle={project.aboutText}
        type={"ProjectHeader"}
        githubLink={() => handleExternalRouting(project.seGithubURL)}
        liveVersionLink={() => handleExternalRouting(project.seLiveUrl)}
      ></PageHeader>
      <Gallery
        //TODO: mapping of the images
        slides={[
          "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/sponsormatch.png?alt=media&token=a379dfa2-e761-49ff-934a-4fc84d15e373",
          "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/Sk%C3%A6rmbillede%202021-09-13%20kl.%2019.26.38.png?alt=media&token=7410d19d-0305-4348-9523-0a37a376ebd2",
        ]}
      ></Gallery>

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
  const data = await getProjectsAndMorweProjects(params?.slug);

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
