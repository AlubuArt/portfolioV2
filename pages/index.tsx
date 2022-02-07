import React from "react";
import type { NextPage, GetStaticProps } from "next";
import { Hero } from "../ui/components/3-organisms/Hero";
import { getHeroContent } from "../lib/graphcms";
import HeroV2 from "../ui/components/3-organisms/Hero/HeroV2/HeroV2";
import { Container } from "../ui/components/4-Layouts/Container";

export interface HomePageProps {
    content: {
        heroes: [
            {
                header: string;
                subheader: { text: string };
                heroImage: { url: string };
            }
        ];
    };
}

const Home: NextPage<HomePageProps> = ({ content }) => {
    return (
        <Container type={"hero"}>
            <HeroV2 heroTitle={""} heroSubtitle={""} onClick={""} />
        </Container>
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
