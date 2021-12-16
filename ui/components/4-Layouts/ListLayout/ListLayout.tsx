import React, { useState } from "react";
import styles from "./ListLayout.module.css";
import { ProjectCard } from "../../2-molecules/ProjectCard";
import { Container } from "../../4-Layouts/Container"


export interface ListLayoutProps {

}


export const ListLayout: React.FC<ListLayoutProps> = ({ }) => {

    let [listItems, setListItems] = useState([{}, {}, {}, {}, {}])

    return (
        <Container width={"sm"} spacing={'lg'}>
            <div className={styles.ListLayoutContainer} >
                {
                    listItems.map((item, index) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <>
                                
                                <ProjectCard key={index} title={"sponsormatch.dk"} description={"lorem ipsum"} onClick={() => { }} image={""} />
                            </>
                           
                        )
                    })
                }
            </div>
        </Container>




    )
}