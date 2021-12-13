import React from "react";
import { Header } from "../../2-molecules/Header";
import { Container } from '../Container';


export interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <Container width={"full"} spacing={"sm"}>
            <Header menuItems={[]}/>
            {children}
        </Container>
    )
}