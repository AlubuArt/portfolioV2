import { NextPage } from "next";
import  Image  from 'next/image'
import React, { useEffect, useState } from "react";
import { Button } from "../ui/components/1-atoms/Button";
import UnderConstruction from "../ui/components/3-organisms/UnderConstruction/UnderConstruction";
import { getVideos } from "../lib/youtube";
import { Heading } from "../ui/components/1-atoms/Heading";


const AboutPage: NextPage = () => {
    const [videos, setVideos] = useState<Array<Models.YTVideo>>([]);

    useEffect(() => {
        const video = async () => {
            setVideos(await getVideos());
        };
        video();
    }, []);

    const handleCLick = () => {
        console.log(videos);
        console.log(videos[0].snippet.thumbnails)
    };

    return (
        <>
            <UnderConstruction pageTitle={"about"} />
            <Button onClick={handleCLick}>{"try me"}</Button>
            <Heading type={"h3"} tag={"h3"}>
                {"My recent viewed YT videos"}
            </Heading>
            {videos.map((video, index) => {
                return (
                    <>
                        <p key={index}>{video.snippet.title}</p>
                        <Image src={video.snippet.thumbnails.medium.url} width={320} height={180} layout={"responsive"} alt={""}></Image>

                    
                    </>
                );
            })}
        </>
    );
};

export default AboutPage;
