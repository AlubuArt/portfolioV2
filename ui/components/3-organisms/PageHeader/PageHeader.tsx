import React from "react";
import { Button } from "../../1-atoms/Button";
import { Heading } from "../../1-atoms/Heading";
import styles from "./PageHeader.module.css";
import { Paragraph } from "../../1-atoms/Paragraph";
import { Container } from "../../4-Layouts/Container";


export interface PageHeaderProps {
    title: string;
    subtitle: string;
    className?: string;
    withButton?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, onClick, withButton }) => (
    <Container width={'full'} spacing={'lg'}>
        <Heading className={styles.PageHeader_title} type="h1" tag="h1">
            {title}
        </Heading>
        <Paragraph className={styles.PageHeader_subtitle} tag={"p"}>
            {subtitle}
        </Paragraph>
        {withButton ?
            <div>
                <Button onClick={onClick} style={"secondary"}>{"see projects"}</Button>
            </div>
            : ""
        }
    </Container>
)



