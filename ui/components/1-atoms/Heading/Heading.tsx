import React from "react";
import classNames from "classnames";
import styles from './Heading.module.css';


export interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    type: 'h1' | 'h2' | 'h3' 
    tag: 'h1' | 'h2' | 'h3' | 'p';
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    className,
    type,
    tag,
}) => React.createElement(
    
    tag,
    {className: classNames(styles.Heading, styles[`Heading___${type}`], className)},
    children
);

