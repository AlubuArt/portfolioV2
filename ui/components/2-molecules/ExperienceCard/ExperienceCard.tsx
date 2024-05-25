import React, { useState } from 'react';
import { Paragraph } from '../../1-atoms/Paragraph';
import styles from './ExperienceCard.module.css';
import classNames from 'classnames';

export interface ExperienceCardProps {
  experience?: Models.Experience;
  education?: Models.Education;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, education }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExternalClick = (input: string) => {
    window.open('https://' + input, '_blank');
  };

  return (
    <>
      {experience ? (
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
            <div hidden={isOpen}>
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
                {experience.description}
              </Paragraph>
            </div>
            <div className={styles.experienceList}>
              <ul className={styles.list}>
                {experience.keys.map((i) => {
                  return <li className={styles.listItem}>{i}</li>;
                })}
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
      ) : education ? (
        <div className={styles.experienceCardContainer}>
          <div className={styles.ExperienceCard_container}>
            <div>
              <p className={styles.jobTitleContainer}>{education.educationTitle}</p>
            </div>
            <div>
              <p className={styles.companyContainer}>
                {education.educationName} ({education.graduationDate})
              </p>
            </div>
            <div hidden={isOpen}>
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
                {education.description}
              </Paragraph>
            </div>
            <div className={styles.experienceList}>
              <ul className={styles.list}>
                {education.keys.map((i) => {
                  return <li className={styles.listItem}>{i}</li>;
                })}
              </ul>
            </div>
            <div className={styles.linkContainer}>
              <p className={styles.toggle} onClick={() => setIsOpen(false)}>
                show less &and;
              </p>
              <p className={styles.externalLink} onClick={() => handleExternalClick(education.link)}>
                visit website &#8827;
              </p>
            </div>
          </div>
          <span className={styles.separator}></span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
