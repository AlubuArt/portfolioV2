import React, { useState } from "react";
import styles from "./CardListLayout.module.css";
import { ProjectCard } from "../../../2-molecules/ProjectCard";
import { Container } from "../../Container";
import { useRouter } from 'next/router';

export interface CardListLayoutProps {
    projects: Array<Models.Project>;
}

export const CardListLayout: React.FC<CardListLayoutProps> = ({ projects }) => {

    //TODO: remove this when projects are implemented from CMS
    let [listItems, setListItems] = useState([{title: "project1", description: "descripton1", aboutText: 'about project1', image: {url: "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/sponsormatch.png?alt=media&token=a379dfa2-e761-49ff-934a-4fc84d15e373"}, list: ["item 1", "item2"]  }]);

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
                                    <ProjectCard title={"sponsormatch.dk"} description={"lorem ipsum"} onClick={handleClick} image={item.image} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}