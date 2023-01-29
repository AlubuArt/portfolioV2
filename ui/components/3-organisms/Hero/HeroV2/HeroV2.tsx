import React from 'react';
import Image from 'next/image';
import { Button } from '../../../1-atoms/Button';
import styles from './HeroV2.module.css';
import { useRouter } from 'next/router';
import SnippetImage from '../../../../../public/Images/carbon.svg';

export interface HeroProps {
  heroTitle: string;
  heroSubtitle: string;
  onClick: string;
}

export const HeroV2: React.FC<HeroProps> = ({ heroTitle, heroSubtitle, onClick }) => {
  const router = useRouter();
  const handleClick = (page: string) => {
    router.push(page);
  };

  return (
    <div className={styles.PageWrapper}>
      <div className={styles.hero_content}>
        <div className={styles.hero_title}>
          <span>Hi 👋 </span>
          <br></br>
          <span>My name is Jacob</span>
          <br></br>
          <span className={styles.blue}> I design</span> and <span className={styles.blue}>develop </span> digital products
        </div>
        <div className={styles.hero_subtitle}>{heroSubtitle}</div>
        <div className={styles.hero_cta}>
          <div className={styles.hero_buttons}>
            <Button style={'CTA___primary'} onClick={() => handleClick('/projects')}>
              See Projects
            </Button>
            <Button style={'CTA___secondary'} onClick={() => handleClick('/contact')}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.hero_background}>
        <Image className={styles.hero_image} src={SnippetImage} objectFit={'fill'} alt={'edef'} />
      </div>
    </div>
  );
};

export default HeroV2;
