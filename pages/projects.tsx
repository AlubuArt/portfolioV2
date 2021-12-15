import React from "react";
import type { NextPage } from "next";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { Container } from "../ui/components/4-Layouts/Container";
import { ProjectCard } from "../ui/components/2-molecules/ProjectCard";
import { ListLayout } from "../ui/components/4-Layouts/ListLayout";


const Projects: NextPage = () => {


    const handleClick = () => {

    }
    return (
        <>
            <Container width={"full"} spacing={'lg'}>

                <Container width={"lg"}>
                    <PageHeader title={"project portfolio"} description={'my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, UX/UI design, Figma'} />
                </Container>


            
            <ListLayout />
            </Container>
           
        </>
    )
}

export default Projects