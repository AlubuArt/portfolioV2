import React from "react";
import type { NextPage } from "next";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { Container } from "../ui/components/4-Layouts/Container";





const Projects: NextPage = () => {

    const handleClick = () => {

    }


    return (

        <Container width={"lg"} spacing={'lg'}>
            <PageHeader title={"project portfolio"} description={'my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, UX/UI design, Figma'} />

            
        </Container>

    )
}

export default Projects