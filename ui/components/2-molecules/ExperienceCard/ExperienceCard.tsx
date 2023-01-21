import React, { useState } from 'react';
import { Paragraph } from '../../1-atoms/Paragraph';
import styles from './ExperienceCard.module.css';
import classNames from 'classnames';

interface ExperienceCardProps {
  experience: Models.Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExternalClick = (input: string) => {
    window.open('https://' + input, '_blank');
  };

  return (
    <div className={styles.experienceCardContainer}>
      <div className={styles.ExperienceCard_container}>
        <div>
          <p className={styles.jobTitleContainer}>{experience.jobTitle}</p>
        </div>
        <div>
          <p className={styles.companyContainer}>
            {experience.companyName} ({experience.dates})
          </p>
        </div>
        <div  hidden={isOpen}>
          <p className={styles.linkContainer} onClick={() => setIsOpen(!isOpen)}>
            show more &or;
          </p>
        </div>
      </div>

      <div
        className={classNames(
          styles.experienceContainerIsOpen,
          styles[`experienceContainerIsOpen___${isOpen ? 'open' : 'closed'}`]
        )}
      >
        <div className={styles.experienceDescription}>
          <Paragraph type={'small'} tag={'p'}>
            Ved AAU arbejder jeg tæt sammen med resten af mine kollegaer i UX Teamet og eksterne udviklere, på AAU´s nye
            websites bygget med Umbraco CMS og Nextjs. Mine primære opgaver er at:{' '}
          </Paragraph>
        </div>
        <div className={styles.experienceList}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Oversætte forskellige perspektiver fra brugere, stakeholders og teammedlemmer til en balanceret Product
              Backlog.
            </li>
            <li>
              Kontinuerligt justering af Product Backlog, sammen med teamet, for at sikre at forretningsmæssige såvel
              som brugernes behov, løses.
            </li>
            <li>
              Transparent og rettidigt kommunikation til brugerne samt stakeholders og udviklkere omkring produktet.
            </li>
            <li>
              Sikre værdiskabelsen for kunden, ved at arbejde vekslende med at udforske problem/løsning og udvikling af
              løsningen.{' '}
            </li>
          </ul>
        </div>
        <div className={styles.linkContainer}>
          <p className={styles.toggle} onClick={() => setIsOpen(false)}>
            show less &and;
          </p>
          <p className={styles.externalLink} onClick={() => handleExternalClick(experience.link)}>
            visit website &#8827;
          </p>
        </div>
      </div>
      <span className={styles.separator}></span>
    </div>
  );
};
