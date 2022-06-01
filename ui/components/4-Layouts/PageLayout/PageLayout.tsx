import React from "react";
import { Header } from "../../2-molecules/Header";
import Footer from "../../3-organisms/Footer/Footer";
import styles from "./PageLayout.module.css";

export interface PageLayoutProps {
    children: React.ReactNode;
    
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    let menuItems = [
        { text: "projects", path: "/projects" },
        { text: "about", path: "/about" },
        /* { text: "experiences", path: "/experience" },
        { text: "education", path: "/education" }, */
        { text: "contact", path: "/contact" },
    ];

    return (
        
        <div className={styles.PageContent}>
            <Header menuItems={menuItems} />
               {children} 
            <Footer />
         
        </div>
        
        
    );
};
