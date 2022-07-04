import React from 'react';
import Head from 'next/head';
import type { NextPage, GetStaticProps } from 'next';
import { Hero } from '../ui/components/3-organisms/Hero';
import { getHeroContent } from '../lib/graphcms';
import HeroV2 from '../ui/components/3-organisms/Hero/HeroV2/HeroV2';
import { Container } from '../ui/components/4-Layouts/Container';

export interface HomePageProps {
  content: {
    header: string;
    subheader: { text: string };
    heroImage: { url: string };
    pageTitle: string;
    pageDescription: string; 
  };
}

const Home: NextPage<HomePageProps> = ({ content }) => {
  return (
    <>
    <Head>
      <meta name="description" content={content.pageDescription}/> 
      <title>JC - {content.pageTitle}</title> 
    </Head>
      <Container type={'hero'}>
        <HeroV2
          heroTitle={''}
          heroSubtitle={content.subheader.text}
          onClick={''}
        />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await getHeroContent();
  return {
    props: { content },
    revalidate: 60,
  };
};

export default Home;
