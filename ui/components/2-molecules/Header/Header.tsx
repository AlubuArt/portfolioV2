import React from "react";
import { Hamburger } from "../../1-atoms/Hamburger";

export interface HeaderProps {
    menuItems: Models.MenuItem[] | undefined;
}

export const Header: React.FC<HeaderProps> = ({ menuItems }) => (
    <Hamburger menuItems={menuItems} />
);
