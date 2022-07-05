import React from 'react';
import type { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import { getHeroContent } from '../lib/graphcms';
import HeroV2 from '../ui/components/3-organisms/Hero/HeroV2/HeroV2';
import { Container } from '../ui/components/4-Layouts/Container';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';

export interface HomePageProps {
  content: {
    header: string;
    subheader: { text: string };
    heroImage: { url: string };
    pageTitle: string;
    pageDescription: string;
  },
  url: string;
}

const Home: NextPage<HomePageProps> = ({ content,url }) => {
  return (
    <>
      <Seo
        openGraphType={'website'}
        url={url}
        title={content.pageTitle}
        description={content.pageDescription}
        image={content.heroImage.url}
        createdAt={''}
        updatedAt={''}
        schemaType={'acticle'}
      />

      <Container type={'hero'}>
        <HeroV2 heroTitle={''} heroSubtitle={content.subheader.text} onClick={''} />
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const content = await getHeroContent();
  return {
    props: { content, url: context?.req?.headers?.host },
   
  };
};

export default Home;
