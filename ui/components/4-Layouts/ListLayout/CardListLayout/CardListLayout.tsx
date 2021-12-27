import React, { useState } from "react";
import styles from "./CardListLayout.module.css";
import { ProjectCard } from "../../../2-molecules/ProjectCard";
import { Container } from "../../Container";
import { useRouter } from 'next/router';

export interface CardListLayoutProps {
    projects:Models.Project[];
}

export const CardListLayout: React.FC<CardListLayoutProps> = ( { projects } ) => {

    const router = useRouter()
    const handleClick = () => {
        router.push('/projectInfo')
    }
    return (
        <Container width={"md"} spacing={'lg'}>
            <div>
                <div className={styles.CardListLayoutContainer} >
                    {
                        projects.map((item, index: number) => {
                            return (
                                <div key={index} className={styles.listItem}>
                                    <ProjectCard title={item.projectTitle} description={item.aboutText} onClick={handleClick} image={item.pictureUrl} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}