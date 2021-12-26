import React from "react";
import classNames from "classnames";
import styles from './Paragraph.module.css';

export interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    tag: 'p'
}

export const Paragraph: React.FC<ParagraphProps> = ({
    children,
    className,
    tag
}) => React.createElement(
    tag,
    {className: classNames(styles.Paragraph, className)},
    children
    
);