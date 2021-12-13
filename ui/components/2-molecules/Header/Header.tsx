import React from "react";
import { Hamburger } from '../../1-atoms/Hamburger';
import { Container } from '../../4-Layouts/Container';

interface MenuItem {
    path: string;
    text: string;
  }

export interface HeaderProps {
    menuItems: MenuItem[];
}

export const Header: React.FC<HeaderProps> = ({menuItems}) => (
    <Container width={"lg"}>
        <Hamburger menuItems={menuItems} />
    </Container>
)