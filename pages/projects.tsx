import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { CardListLayout } from '../ui/components/4-Layouts/ListLayout/CardListLayout';
import { getAllProjects, getProjectPage } from '../lib/graphcms';
import { Container } from '../ui/components/4-Layouts/Container';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';

export interface ProjectsProps {
  projects: Array<Models.Project>;
  url: string;
  metaData: Models.Meta;
}

const Projects: NextPage<ProjectsProps> = ({ projects, url, metaData }) => {
  return (
    <>
      <Seo
        openGraphType={'website'}
        url={url}
        title={metaData.metaTitle}
        description={metaData.metaDescription}
        image={metaData.metaImage}
        createdAt={''}
        updatedAt={''}
        schemaType={'article'}
      />

      <Container type={'projects'} spacing={'lg'}>
        <PageHeader
          title={'project portfolio'}
          subtitle={'I have sampled some of my lastest work, done with some of the technologies I enjoy most'}
        />
        <CardListLayout projects={projects} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await getAllProjects();
  const projectPage = await getProjectPage();
  return {
    props: {
      projects,
      url: context?.req?.headers?.host,
      metaData: {
        metaTitle: projectPage.metaData.metaTitle,
        metaDescription: projectPage.metaData.metaDescription,
        metaImage: projectPage.metaData.metaImage.url,
      },
    },
  };
};

export default Projects;
