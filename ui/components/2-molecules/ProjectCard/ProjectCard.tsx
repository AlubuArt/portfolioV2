import React from 'react';
import styles from './ProjectCard.module.css';
import { Card } from '../../1-atoms/Card';
import { Heading } from '../../1-atoms/Heading';
import { Button } from '../../1-atoms/Button';
import { Paragraph } from '../../1-atoms/Paragraph';

export interface ProjectCardProps {
  className?: string;
  title: string;
  description?: string;
  image: Models.Image['url'];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, onClick }) => (
  <>
    <Card image={image} className={styles.project_card} size={'sm'} type={'project_card'} onClick={() => {}}>
      <div className={styles.info}>
        <Heading className={styles.infoTitle} type={'h3'} tag={'h3'}>
          {title}
        </Heading>
        <div className={styles.infoDescription}>
          <Paragraph tag={'p'}>{description}</Paragraph>
        </div>
        <div className={styles.infoButton}>
          <Button style={'primary'} onClick={onClick}>
            more...
          </Button>
        </div>
      </div>
    </Card>
  </>
);
