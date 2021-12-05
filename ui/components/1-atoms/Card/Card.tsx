import styles from "./Card.module.css";
import classNames from "classNames";

export interface CardProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  style?: "frosted";
  size?: "small" | "large";
}

export const Card: React.FC<CardProps> = ({ children, onClick, style, size }) => (
  <div
    role="card"
    className={classNames(styles.Card, [styles[`Card___${style}`]], [styles[`Card___${size}`]])}
    onClick={onClick}
    
  >
    {children}
  </div>
);
