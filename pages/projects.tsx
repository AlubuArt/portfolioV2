import React from 'react';
import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { CardListLayout } from '../ui/components/4-Layouts/ListLayout/CardListLayout';
import { getAllProjects, getProjectPage } from '../lib/graphcms';
import { Container } from '../ui/components/4-Layouts/Container';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';

export interface ProjectsProps {
  projects: Array<Models.Project>;
  metaData: Models.Meta;
}

const Projects: NextPage<ProjectsProps> = ({ projects, metaData }) => {
  return (
    <>
      <Seo
        openGraphType={'website'}
        url={'https://jcvisueldesign.dk/projects'}
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

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();
  const projectPage = await getProjectPage();
  return {
    props: {
      projects,

      metaData: {
        metaTitle: projectPage.metaData.metaTitle,
        metaDescription: projectPage.metaData.metaDescription,
        metaImage: projectPage.metaData.metaImage.url,
      },
    },
    revalidate: 60, // seconds
  };
};

export default Projects;
