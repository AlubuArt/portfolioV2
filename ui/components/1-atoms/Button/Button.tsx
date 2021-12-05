import styles from "./Button.module.css";
import classNames from "classNames";

export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: "primary" | "secondary" | "white" | "CTA___primary" | "CTA___secondary";

}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  style
}) => <button 
        className={classNames(
            styles.Button,
            [styles[`Button___${style}`]])}
        onClick={onClick}
        >
    {children}
    </button>;
