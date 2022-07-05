import React from 'react';
import Head from 'next/head';
import settings from '../../../../lib/seoSettings';

type SocialTags = {
  openGraphType: string;
  url: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

const socialTags = (props: SocialTags) => {
  const metaTags = [
    { tagName: 'og:title', content: props.title },
    { tagName: 'og:type', content: props.openGraphType },
    { tagName: 'og:url', content: props.url },
    { tagName: 'og:image', content: props.image },
    { tagName: 'og:description', content: props.description },
    {
      tagName: 'og:site_name',
      tagContent: settings && settings.meta && settings.meta.title,
    },
    {
      tagName: 'og:published_time',
      tagContent: props.createdAt || new Date().toISOString(),
    },
    {
      tagName: 'og:modified_time',
      tagContent: props.updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

interface SeoProps {
  openGraphType: string;
  url: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  schemaType: string;
}

export const Seo: React.FC<SeoProps> = (props) => {
  const { title, description, image, schemaType, url } = props;

  return (
    <Head>
      <title>{title} | App </title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {socialTags(props).map(({ tagName, tagContent }) => {
        return <meta key={tagName} name={tagName} content={tagContent} />;
      })}
      <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": schemaType,
          name: title,
          about: description,
          url: url,
        }),
      }}
    />
    </Head>
  );
};

Seo.defaultProps = {
  url: '/',
  openGraphType: 'website',
  schemaType: "Article",
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image: settings && settings.meta && settings.meta.social && settings.meta.social.image,
};
