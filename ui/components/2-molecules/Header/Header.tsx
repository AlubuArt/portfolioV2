import React from "react";
import { Hamburger } from '../../1-atoms/Hamburger';
import styles from './Header.module.css';


export interface HeaderProps {
    menuItems: Models.MenuItem[];
}

export const Header: React.FC<HeaderProps> = ({menuItems}) => (

    <div className={styles.Header___menu}>
        <Hamburger menuItems={menuItems} />
    </div>
    
        
    
)