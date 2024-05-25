import { NextPage } from 'next';
import React from 'react';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';
import { Container } from '../ui/components/4-Layouts/Container/Container';
import { PageHeader } from '../ui/components/3-organisms/PageHeader';
import { CardListLayout } from '../ui/components/4-Layouts/ListLayout/CardListLayout';
import { ListLayout } from '../ui/components/4-Layouts/ListLayout/ListLayout';

export interface BlogProps {
  posts: [];
  metaData: Models.Meta;
}

const Blog: NextPage<BlogProps> = ({posts = [{
    pictureUrl: 'www.aau.dk',
    blogpostTitle: 'some title',
    leadinText: 'leadin text',
    date: '12/10/1985',
    content: 'this is the contetn',
    id: '1234566778',
    slug: 'post1',
  }], metaData }) => {

  return (
    <>
      <Seo
        openGraphType={''}
        url={''}
        title={''}
        description={''}
        image={''}
        createdAt={''}
        updatedAt={''}
        schemaType={''}
      />
      <Container type={'projects'} spacing={'lg'}>
        <PageHeader
          title={'blog posts'}
          subtitle={'Ocasionally I convince myself I have something smart to share. When I do, I share it here. '}
        />
      </Container>
      <ListLayout type={'blogPosts'} list={posts} />
    </>
  );
};

export default Blog;
