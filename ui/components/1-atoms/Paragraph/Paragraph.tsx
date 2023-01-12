import React from "react";
import classNames from "classnames";
import styles from './Paragraph.module.css';

export interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
    tag: 'p';
    type?: 'small' | undefined;
}

export const Paragraph: React.FC<ParagraphProps> = ({
    children,
    className,
    tag,
    type
}) => React.createElement(
    tag,
    {className: classNames(styles.Paragraph, styles[`Paragraph___${type}`], className)},
    children
    
);