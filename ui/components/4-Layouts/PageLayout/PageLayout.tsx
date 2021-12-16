import React from "react";
import { Header } from "../../2-molecules/Header";
import { Container } from '../Container';
import styles from './PageLayout.module.css';


export interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <div className={styles.PageContent}>
            <Header menuItems={[]}/>
            {children}
        </div>
        
    )
}