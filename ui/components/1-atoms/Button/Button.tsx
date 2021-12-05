import styles from "./Button.module.css";
import classNames from "classNames";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: "primary" | "secondary" | "white"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style = "primary",
}) => <button 
        className={classNames(styles.Button, [styles[`Button___${style}`]])}
        onClick={onClick}>
    {children}
</button>;
