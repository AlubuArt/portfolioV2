import { NextPage } from 'next';
import React from 'react';
import { ContactForm } from '../ui/components/3-organisms/ContactForm';
import { Container } from '../ui/components/4-Layouts/Container';
import { Seo } from '../ui/components/4-Layouts/SEO/Seo';

const ContactPage: NextPage = ({}) => {
  return (
    <>
      <Seo
        openGraphType={'website'}
        url={'/contact'}
        title={'contact me'}
        description={'contact page with awesome custom contact form'}
        image={''}
        createdAt={''}
        updatedAt={''}
        schemaType={''}
      />
      <Container type={'contact'} spacing={'lg'}>
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactPage;
