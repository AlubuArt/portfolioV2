import React, { useState } from "react";
import styles from "./CardListLayout.module.css";
import { ProjectCard } from "../../../2-molecules/ProjectCard";
import { Container } from "../../Container";
import { useRouter } from 'next/router';

export interface CardListLayoutProps {
    projects: Array<Models.Project>
}

export const CardListLayout: React.FC<CardListLayoutProps> = ({ projects }) => {

    //TODO: removed this when projects are implemented from CMS
    let [listItems, setListItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    const router = useRouter()
    const handleClick = () => {
        router.push('/projectInfo')
    }
    return (
        <Container width={"md"} spacing={'lg'}>
            <div>
                <div className={styles.CardListLayoutContainer} >
                    {
                        listItems.map((item, index: number) => {
                            return (
                                <div key={index} className={styles.listItem}>
                                    <ProjectCard title={"sponsormatch.dk"} description={"lorem ipsum"} onClick={handleClick} image={""} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}