import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { getVideos } from "../lib/youtube";
import { Heading } from "../ui/components/1-atoms/Heading";
import { Container } from "../ui/components/4-Layouts/Container";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { TextBox } from "../ui/components/2-molecules/TextBox";
import { ListLayout } from "../ui/components/4-Layouts/ListLayout/ListLayout";
import { getAboutMe } from "../lib/graphcms";


interface AboutPageProps {
    text: Models.AboutMeText
}


const AboutPage: NextPage<AboutPageProps> = ({text}) => {
    const [videos, setVideos] = useState<Array<Models.YTVideo>>([]);

    useEffect(() => {
        const video = async () => {
            setVideos(await getVideos());
        };
        video();
        
    }, [text]);

    return (
        <Container type={"about"} spacing={"lg"}>
            <PageHeader
                title={text.aboutMeHeader}
                subtitle={text.aboutShortDescription}
            ></PageHeader>
            <TextBox text={text.aboutMeLongDescription.html} author={text.author}></TextBox>
            <Heading tag={"h3"} type={"h3"}>
                {"my favourite YT playlist"}
            </Heading>
            <ListLayout />
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await getAboutMe();
    return {
        props: { text: data.aboutMe },
        revalidate: 60,
    }
}

export default AboutPage;
