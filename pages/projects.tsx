import React from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { CardListLayout } from '../ui/components/4-Layouts/ListLayout/CardListLayout';
import { getAllProjects } from '../lib/graphcms';
import { Container } from '../ui/components/4-Layouts/Container';
import {Seo} from '../ui/components/4-Layouts/SEO/Seo';

export interface ProjectsProps {
  projects: Array<Models.Project>;
  url: string;
}

const Projects: NextPage<ProjectsProps> = ({ projects, url }) => {
  return (
    <>
    
      <Container type={'projects'} spacing={'lg'}>
        <PageHeader
          title={'project portfolio'}
          subtitle={'my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, Figma'}
        />
        <CardListLayout projects={projects} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await getAllProjects();
  return {
    props: { projects, url: context?.req?.headers?.host },
  };
};

export default Projects;
