import React from "react";
import type { NextPage } from "next";
import { PageHeader } from "../ui/components/3-organisms/PageHeader";
import { CardListLayout } from "../ui/components/4-Layouts/ListLayout/CardListLayout";
import styles from '../styles/wrapper.module.css';

export interface ProjectsProps {
    projects: Array<Models.Project>
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {

    return (
        <div className={styles.wrapper}>
            <PageHeader title={"project portfolio"} subtitle={'my lastest work with ReactJS, NextJS, Firebase, NodeJS, GraphQL, UX/UI design, Figma'} />
            <CardListLayout projects={projects} />
        </div>
    )
}

export default Projects