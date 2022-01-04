import { NextPage } from "next";
import  Image  from 'next/image'
import React, { useEffect, useState } from "react";
import { Button } from "../ui/components/1-atoms/Button";
import UnderConstruction from "../ui/components/3-organisms/UnderConstruction/UnderConstruction";
import { getVideos } from "../lib/youtube";
import { Heading } from "../ui/components/1-atoms/Heading";
import { Container } from "../ui/components/4-Layouts/Container";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { Paragraph } from "../ui/components/1-atoms/Paragraph";
import { TextBox } from "../ui/components/2-molecules/TextBox";
import { ListLayout } from "../ui/components/4-Layouts/ListLayout/ListLayout";


const AboutPage: NextPage = () => {
    const [videos, setVideos] = useState<Array<Models.YTVideo>>([]);

    useEffect(() => {
        const video = async () => {
            setVideos(await getVideos());
        };
        video();
    }, []);

    console.log(videos[0])

    return (
        
        <Container type={"about"} spacing={"lg"}>
            <PageHeader title={"about me"} subtitle={"This is a short description about me. It is meant to summarize who I am in very few words, and to make the reader wnat to read more about me."} >
                
            </PageHeader>
            <TextBox></TextBox>
            <Heading tag={"h3"} type={"h3"}>{"my favourite YT playlist"}</Heading>
            <ListLayout />



           
            
            
        </Container>
            
       
    );
};

export default AboutPage;



