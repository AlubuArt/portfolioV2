import React from "react";
import classNames from "classNames";
import styles from './Container.module.css';


export interface ContainerProps {
    children: React.ReactNode;
    width: 'full' | 'sm' | 'md' | 'lg';
    spacing?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({children, width}) => (
    <div className={classNames(styles.Container, styles[`Container___${width}`])}>
        {children}

    </div>
)