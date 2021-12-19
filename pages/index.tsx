import React from "react";
import type { NextPage } from "next";
import Image from 'next/image';
import { Container } from "../ui/components/4-Layouts/Container";
import { Heading } from "../ui/components/1-atoms/Heading";
import { Hero } from '../ui/components/3-organisms/Hero';


export interface HomePageProps {
  title: string;
  subtitle: string;
  image: Models.Image;
}

const Home: NextPage<HomePageProps> = ({ title, subtitle, image }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Hero 
        heroImage={"https://jc-portofolio-93953.web.app/static/media/header_blaa_2000x1000.18040b32.jpg"} 
        heroTitle={"JACOB CHRISTENSEN "} 
        heroSubtitle={"Digital Product Developer | Frontend Developer | UX & Web | Entrepreneur | Tech"} 
        onClick={handleClick} 
      />


    </>
  );
};

export default Home;
