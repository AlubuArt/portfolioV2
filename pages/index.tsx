import React from "react";
import type { NextPage } from "next";
import { Hero } from '../ui/components/3-organisms/Hero';


export interface HomePageProps {
  title: string;
  subtitle: string;
  image: Models.Image;
  url: string;
}

const Home: NextPage<HomePageProps> = ({ title, subtitle, image, url }) => {


  return (
    <>
      <Hero 
        heroImage={"https://jc-portofolio-93953.web.app/static/media/header_blaa_2000x1000.18040b32.jpg"} 
        heroTitle={"JACOB CHRISTENSEN "} 
        heroSubtitle={"Digital Product Developer | Frontend Developer | UX & Web | Entrepreneur | Tech"} 
        onClick={'/projects'} 
      />


    </>
  );
};

export default Home;
