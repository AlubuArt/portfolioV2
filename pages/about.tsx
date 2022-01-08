import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getYouTubePlaylist } from "../lib/youtube";
import { Heading } from "../ui/components/1-atoms/Heading";
import { Container } from "../ui/components/4-Layouts/Container";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { TextBox } from "../ui/components/2-molecules/TextBox";
import { ListLayout } from "../ui/components/4-Layouts/ListLayout/ListLayout";
import { getAboutMe } from "../lib/graphcms";

interface AboutPageProps {
    text: Models.AboutMeText;
    YTList: [];
}

const AboutPage: NextPage<AboutPageProps> = ({ text, YTList }) => {
    return (
        <Container type={"about"} spacing={"lg"}>
            <PageHeader
                title={text.aboutMeHeader}
                subtitle={text.aboutShortDescription}
            ></PageHeader>
            <TextBox
                text={text.aboutMeLongDescription.html}
                author={text.author}
            ></TextBox>
            <Heading tag={"h3"} type={"h3"}>
                {"my favourite YT playlist"}
            </Heading>
            {YTList.length > 0 ? (
                <ListLayout list={YTList} />
            ) : (
                //TODO: Custom error message to be printed
                <p>{"Oh oh! Couldn't get a YT playlist :-("}</p>
            )}
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const text = await getAboutMe();
    const YTList = await getYouTubePlaylist(
        "PLEqpYJHv1AC-40WINYMcCI0T4YCCSc84X"
    );

    return {
        props: {
            text: text.aboutMe,
            YTList: YTList,
        },
        revalidate: 60,
    };
};

export default AboutPage;
