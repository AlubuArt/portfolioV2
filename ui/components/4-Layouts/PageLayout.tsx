import React from "react";
import { Header } from "../2-molecules/Header";


export interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <div>
            <Header menuItems={[]}/>
            {children}
        </div>
    )
}