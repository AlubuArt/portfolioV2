import React from "react";
import type { NextPage } from "next";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { Container } from "../ui/components/4-Layouts/Container";
import { ProjectCard } from "../ui/components/2-molecules/ProjectCard";
import { ListLayout } from "../ui/components/4-Layouts/ListLayout";
import styles from '../styles/wrapper.module.css'


const Projects: NextPage = () => {


    const handleClick = () => {

    }
    return (
        <div className={styles.wrapper}>
            <PageHeader title={"project portfolio"} description={'my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, UX/UI design, Figma'} />
            <ListLayout />
        </div>
    )
}

export default Projects