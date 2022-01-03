import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/components/1-atoms/Button";
import UnderConstruction from "../ui/components/3-organisms/UnderConstruction/UnderConstruction";
import { getVideos } from "../lib/youtube";
import { Heading } from "../ui/components/1-atoms/Heading";

interface video {
    snippet: { title: string };
}

const AboutPage: NextPage = () => {
    const [videos, setVideos] = useState<Array<video>>([]);

    useEffect(() => {
        const video = async () => {
            setVideos(await getVideos());
        };
        video();
    }, []);

    const handleCLick = () => {
        console.log(videos);
    };

    return (
        <>
            <UnderConstruction pageTitle={"about"} />
            <Button onClick={handleCLick}>{"try me"}</Button>
            <Heading type={"h3"} tag={"h3"}>
                {"My recent viewed YT videos"}
            </Heading>
            {videos.map((video, index) => {
                return <p key={index}>{video.snippet.title}</p>;
            })}
        </>
    );
};

export default AboutPage;
