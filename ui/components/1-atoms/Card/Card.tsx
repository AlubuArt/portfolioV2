import styles from "./Card.module.css";
import classNames from "classNames";

export interface CardProps {
  className?: string;
  size: "sm" | "lg";
  type: "basic" | "project_card";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  image?: Models.Image | undefined
}

export const Card: React.FC<CardProps> = ({
  children,
  onClick,
  type,
  className,
  size,
  image

}) => (
  <div
    role="card"
    style={{backgroundImage: `url(${image?.url})`}}
    className={classNames(
      styles.Card,
      [styles[`Card___${type}`]],
      [styles[`Card___${size}`]],
      className
      
    )}
    onClick={onClick}
  >
    {children}
  </div>
);
