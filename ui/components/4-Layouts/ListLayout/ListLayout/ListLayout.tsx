import React from 'react';
import { ExperienceCard } from '../../../2-molecules/ExperienceCard';
import { Container } from '../../Container';
import { ListItem } from '../../../2-molecules/ListItem';

interface ListLayoutProps {
  list: [];
  type: 'youtube' | 'experience' | 'education';
}

export const ListLayout: React.FC<ListLayoutProps> = ({ list, type }) => {
  return (
    <Container spacing={'sm'}>
      {type === 'youtube' ? (
        list.map((item, index: number) => {
          return (
            <div key={index}>
              <ListItem items={item} />
            </div>
          );
        })
      ) : type === 'experience' ? (
        <Container type={'experienceList'}>
          {' '}
          {list.map((item, index: number) => {
            return (
              <div key={index}>
                <ExperienceCard experience={item} />
              </div>
            );
          })}
        </Container>
      ) : (
        <Container type={'experienceList'}>
          {' '}
          {list.map((item, index: number) => {
            return (
              <div key={index}>
                <ExperienceCard education={item} />
              </div>
            );
          })}
        </Container>
      )}
    </Container>
  );
};
