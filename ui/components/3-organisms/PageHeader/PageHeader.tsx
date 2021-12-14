import React from "react";
import { Button } from "../../1-atoms/Button";
import { Heading } from "../../1-atoms/Heading";
import styles from "./PageHeader.module.css";
import { Paragraph } from "../../1-atoms/Paragraph";
import { Container } from "../../4-Layouts/Container";


export interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
    <>
        <Heading className={styles.PageHeader_title} type="h1" tag="h1">
            {title}
        </Heading>
        <Paragraph className={styles.PageHeader_description} tag={"p"}>
            {description}
        </Paragraph>
    </>
)



