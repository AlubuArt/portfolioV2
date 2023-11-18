import React from 'react';
import { ProjectCard } from '../../../2-molecules/ProjectCard';
import { useRouter } from 'next/router';
import { Container } from '../../Container';

export interface CardListLayoutProps {
  projects: Models.Project[];
}

export const CardListLayout: React.FC<CardListLayoutProps> = ({ projects }) => {



  const listProjects = projects.map((item, index: number) => {
    return (
      <ProjectCard
        key={index}
        title={item.projectTitle}
        description={item.description}
        url={`/projects/${item.slug}`}
        image={item.pictureUrl}
      />
    );
  });

  return <Container type={'CardList'}>{listProjects}</Container>;
};
