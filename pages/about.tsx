import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { getYouTubePlaylist } from '../lib/youtube';
import { Heading } from '../ui/components/1-atoms/Heading';
import { Container } from '../ui/components/4-Layouts/Container';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { TextBox } from '../ui/components/2-molecules/TextBox';
import { ListLayout } from '../ui/components/4-Layouts/ListLayout/ListLayout';
import { getAboutMe, getEducations, getExperiences } from '../lib/graphcms';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';
import { LoadingSpinner } from '../ui/components/1-atoms/LoadingSpinner/LoadingSpinner';

interface AboutPageProps {
  text: Models.AboutMeText;
  experiences: [];
  educations: [];
  metaData: Models.Meta;
}

const AboutPage: NextPage<AboutPageProps> = ({ text, experiences, metaData, educations }) => {
  const [YTList, setYTList] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getYouTubePlaylist('PLEqpYJHv1AC-ASCBue9-VYB9SLj7LgfV9');
      setYTList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Seo
        openGraphType={'website'}
        url={'https://www.jcvisueldesign.dk/about'}
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
          {experiences ? (
            <>
              <Heading tag={'h2'} type={'h2'}>
                {'work history'}
              </Heading>
              <ListLayout list={experiences} type={'experience'} />
            </>
          ) : (
            //TODO: Custom error message to be printed
            <></>
          )}
        </Container>
        <Container>
          {educations ? (
            <>
              <Heading tag={'h2'} type="h2">
                {'educations'}
              </Heading>
              <ListLayout list={educations} type={'education'} />
            </>
          ) : (
            <></>
          )}
          ;
        </Container>
        <Container spacing={'md'}>
          <Heading tag={'h2'} type={'h2'}>
            {'my recently viewed youtube videos'}
          </Heading>
          {loading ? <LoadingSpinner /> : <ListLayout list={YTList} type={'youtube'} />}
        </Container>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const text = await getAboutMe();
  const experiences = await getExperiences();
  const educations = await getEducations();

  return {
    props: {
      text: text.aboutMe,
      experiences: experiences,
      educations: educations,
      metaData: {
        metaTitle: text.aboutMe.meta.metaTitle,
        metaDescription: text.aboutMe.meta.metaDescription,
        metaImage: text.aboutMe.meta.metaImage.url,
      },
    },
  };
};

export default AboutPage;
