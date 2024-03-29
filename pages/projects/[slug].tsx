import React from 'react';
import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PageHeader } from '../../ui/components/3-organisms/PageHeader';
import { ProjectDescription } from '../../ui/components/3-organisms/ProjectDescription';
import { Gallery } from '../../ui/components/3-organisms/Gallery';
import { getAllProjectsWithSlug, getProject } from '../../lib/graphcms';
import { Container } from '../../ui/components/4-Layouts/Container';
import { Seo } from '../../ui/components/4-Layouts/SEO/Seo';

export interface ProjectPageProps {
  project: Models.Project;
  metaData: Models.Meta;
  url: string
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project, metaData, url }) => {
  const handleExternalRouting = (url: string) => {
    document.location.href = url;
  };

  return (
    <>
      <Seo
        openGraphType={'website'}
        url={`https://www.jcvisueldesign.dk/projects/${url}`}
        title={metaData.metaTitle}
        description={metaData.metaDescription}
        image={metaData.metaImage}
        createdAt={''}
        updatedAt={''}
        schemaType={'article'}
      />

      <Container type={'project'} spacing={'lg'}>
        <PageHeader
          title={project.projectTitle}
          subtitle={project.description}
          type={'ProjectHeader'}
          githubLink={() => handleExternalRouting(project.seGithubURL)}
          liveVersionLink={() => handleExternalRouting(project.seLiveUrl)}
        ></PageHeader>
        <Gallery slides={project.projectPictures}></Gallery>

        <ProjectDescription
          title="about this project"
          description={project.about.html}
          list={[]} //TODO: should be made optional
        ></ProjectDescription>

        <ProjectDescription
          title="tech, tools and the fun stuff"
          description="In this project the following technologies and tools was used"
          list={project.keys} //TODO: make it possible to add more than three keys
        ></ProjectDescription>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProject(params?.slug);

  return {
    props: {
      project: data.project,
      url: params?.slug,
      metaData: {
        metaTile: data.project.meta.metaTitle,
        metaDescription: data.project.meta.metaDescription,
        metaImage: data.project.meta.metaImage.url,
      },
    },
    revalidate: 60, // seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getAllProjectsWithSlug();
  return {
    paths: projects.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  };
};

export default ProjectPage;
