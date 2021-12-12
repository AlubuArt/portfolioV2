import React from "react";
import { Hamburger } from '../../1-atoms/Hamburger';

interface MenuItem {
    path: string;
    text: string;
  }

export interface HeaderProps {
    menuItems: MenuItem[];
}

export const Header: React.FC<HeaderProps> = ({menuItems}) => (
    <div>
        <Hamburger menuItems={menuItems} />
    </div>
)