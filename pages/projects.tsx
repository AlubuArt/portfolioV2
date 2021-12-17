import React from "react";
import type { NextPage } from "next";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { Container } from "../ui/components/4-Layouts/Container";
import { ProjectCard } from "../ui/components/2-molecules/ProjectCard";
import { ListLayout } from "../ui/components/4-Layouts/ListLayout";
import styles from '../styles/wrapper.module.css';
import { useRouter } from 'next/router';
import { Project } from "./projectInfo";


export interface ProjectsProps {
    projects: Array<Project>
}


const Projects: NextPage<ProjectsProps> = ({projects}) => {

    const router = useRouter()


    const handleClick = () => {

        router.push('/projectInfo')


    }
    return (
        <div className={styles.wrapper}>
            <PageHeader title={"project portfolio"} description={'my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, UX/UI design, Figma'} />
            <ListLayout projects={projects}/>
        </div>
    )
}

export default Projects