import React from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

export interface ContainerProps {
    type?: "project" | "hero" | "projects" | "CardList" | "contact" | "inputform" | "about" | "textBox";
    children: React.ReactNode;
    spacing?: "sm" | "md" | "lg";
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    type,
    spacing,
}) => (
    <div
        className={classNames(
            styles.Container,
            styles[`Container___${type}`],
            styles[`Container___spacing___${spacing}`]
        )}
    >
        {children}
    </div>
);
