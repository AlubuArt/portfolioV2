import React, { useState } from 'react';
import { Paragraph } from '../../1-atoms/Paragraph';
import styles from './BlogPostCard.module.css';
import classnames from 'classnames';
import { ExperienceCardProps } from '../ExperienceCard';
import { Container } from '../../4-Layouts/Container';


interface BlogPostCardProps extends ExperienceCardProps {
  blogpost: Models.BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({blogpost}) => {
  return (
    <>
      <Container type={'CardList'} spacing={'lg'}>
        <div>


        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
      
    </>
  )
}