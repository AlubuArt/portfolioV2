import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { getYouTubePlaylist } from '../lib/youtube';
import { Heading } from '../ui/components/1-atoms/Heading';
import { Container } from '../ui/components/4-Layouts/Container';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { TextBox } from '../ui/components/2-molecules/TextBox';
import { ListLayout } from '../ui/components/4-Layouts/ListLayout/ListLayout';
import { getAboutMe, getExperiences } from '../lib/graphcms';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';

interface AboutPageProps {
  text: Models.AboutMeText;
  YTList: [];
  experiences: [];
  url: string;
  metaData: Models.Meta;
}

const AboutPage: NextPage<AboutPageProps> = ({ text, YTList, experiences, metaData, url }) => {
  return (
    <>
      <Seo
        openGraphType={'website'}
        url={url}
        title={metaData.metaTitle}
        description={metaData.metaDescription}
        image={metaData.metaImage}
        createdAt={''}
        updatedAt={''}
        schemaType={'acticle'}
      />

      <Container type={'about'} spacing={'lg'}>
        <div>
          <PageHeader title={text.aboutMeHeader} subtitle={text.aboutShortDescription}></PageHeader>
          <TextBox text={text.aboutMeLongDescription.html} author={text.author}></TextBox>
        </div>
        <Container spacing={'md'}>
          <Heading tag={'h2'} type={'h2'}>
            {'work history'}
          </Heading>
          {experiences.length > 0 ? (
            <ListLayout list={experiences} type={'experience'} />
          ) : (
            //TODO: Custom error message to be printed
            <p>{"Oh oh! Couldn't load experiences :-("}</p>
          )}
        </Container>
        <Container spacing={'md'}>
          <Heading tag={'h2'} type={'h2'}>
            {'my recently viewed youtube videos'}
          </Heading>

          {YTList.length > 0 ? (
            <ListLayout list={YTList} type={'youtube'} />
          ) : (
            //TODO: Custom error message to be printed
            <p>{"Oh oh! Couldn't get a YT playlist :-("}</p>
          )}
        </Container>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const text = await getAboutMe();
  const experiences = await getExperiences();
  const YTList = await getYouTubePlaylist('PLEqpYJHv1AC-ASCBue9-VYB9SLj7LgfV9');

  return {
    props: {
      text: text.aboutMe,
      YTList: YTList.reverse(),
      experiences: experiences,
      url: context?.req?.headers?.host,
      metaData: {
        metaTitle: text.aboutMe.meta.metaTitle,
        metaDescription: text.aboutMe.meta.metaDescription,
        metaImage: text.aboutMe.meta.metaImage.url,

      },
    },
  };
};

export default AboutPage;
