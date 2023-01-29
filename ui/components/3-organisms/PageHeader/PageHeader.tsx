import React from 'react';
import { Button } from '../../1-atoms/Button';
import { Heading } from '../../1-atoms/Heading';
import styles from './PageHeader.module.css';
import { Paragraph } from '../../1-atoms/Paragraph';

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  githubLink?: React.MouseEventHandler<HTMLButtonElement>;
  liveVersionLink?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'ProjectHeader' | 'PageHeader';
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, githubLink, liveVersionLink, type }) => {
  return (
    <div className={styles.pageHeader___container}>
      <Heading className={styles.PageHeader_title} type="h1" tag="h1">
        {title}
      </Heading>
      <Paragraph className={styles.PageHeader_subtitle} tag={'p'}>
        <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      </Paragraph>

      {type === 'ProjectHeader' ? (
        <div className={styles.buttons_container}>
          <Button onClick={liveVersionLink} style={'CTA___primary'}>
            {'Website'}
          </Button>
          <Button onClick={githubLink} style={'CTA___secondary'}>
            {'Github'}
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
