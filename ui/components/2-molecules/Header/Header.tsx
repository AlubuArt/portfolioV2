import React from "react";
import { Hamburger } from '../../1-atoms/Hamburger';
import { Container } from '../../4-Layouts/Container';


export interface HeaderProps {
    menuItems: Models.MenuItem[];
}

export const Header: React.FC<HeaderProps> = ({menuItems}) => (
    
        <Hamburger menuItems={menuItems} />
    
)