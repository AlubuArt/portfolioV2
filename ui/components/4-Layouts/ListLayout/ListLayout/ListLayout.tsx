import React, {useEffect, useState} from "react";
import { ProjectCard } from "../../../2-molecules/ProjectCard";
import { useRouter } from "next/router";
import { Container } from "../../Container";
import getVideos from "../../../../../lib/youtube";
import { ListItem } from "./ListItem";



export const ListLayout: React.FC<{}> = () => {

    const [list, setList] =  useState<Array<Models.YTVideo>>([]) 

    const router = useRouter();

    const handleClick = (slug: string) => {
       
    };


    useEffect(() => {

        const video = async () => {
            setList(await getVideos());
        };
        video();

    }, [])
    return (
        <Container>
            {list.map((item, index: number) => {
                return (
                    <div key={index}>
                        <ListItem items={item}></ListItem>
                    </div>
                );
            })}
        </Container>
    );
};

