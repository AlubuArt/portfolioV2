import React, { useState } from "react";
import styles from "./ListLayout.module.css";
import { ProjectCard } from "../../2-molecules/ProjectCard";
import { Container } from "../../4-Layouts/Container";
import { useRouter } from 'next/router'

export interface ListLayoutProps {
    projects: Array<Models.Project>
}

export const ListLayout: React.FC<ListLayoutProps> = ({ projects }) => {

    //TODO: removed this when projects are implemented from CMS
    let [listItems, setListItems] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    const router = useRouter()
    const handleClick = () => {
        console.log("routing to project info page")
        router.push('/projectInfo')
    }
    return (
        <Container width={"md"} spacing={'lg'}>
            <div className={styles.test}>
                <div className={styles.ListLayoutContainer} >
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