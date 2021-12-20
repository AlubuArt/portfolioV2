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
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'ProjectHeader' | 'PageHeader' | 'HeroHeader'
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, onClick, type }) => (
    <Container width={'full'} spacing={'lg'}>
        <Heading className={styles.PageHeader_title} type="h1" tag="h1">
            {title}
        </Heading>
        <Paragraph className={styles.PageHeader_subtitle} tag={"p"}>
            {subtitle}
        </Paragraph>
        {
            type === 'HeroHeader' ?
                <div>
                    <Button onClick={onClick} style={"secondary"}>{"see projects"}</Button>
                </div>
            : type === 'ProjectHeader' ?
                <div>
                    <Button onClick={onClick} style={"CTA___primary"}>
                        {"VISIT WEBSITE"}
                    </Button>
                    <Button onClick={onClick} style={"CTA___secondary"}>
                        {"SEE ON GITHUB"}
                    </Button>
                </div>

                : ""
        }
    </Container>
)




