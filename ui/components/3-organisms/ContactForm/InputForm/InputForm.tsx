import React, { ChangeEvent } from "react";
import { Button } from "../../../1-atoms/Button";
import styles from "./InputForm.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

/* interface MyEventTarget extends EventTarget {
    value: string
}

interface MyFormEvent extends React.FormEvent {
    target: MyEventTarget
} */

interface InputFormProps {
  type: "name" | "email" | "message";
  placeholder: string;
  value: string;
  icon?: IconProp | undefined;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const InputForm: React.FC<InputFormProps> = ({
  onClick,
  onChange,
  placeholder,
  value,
  icon,
  buttonText
}) => {
  return (
    <>
      <div className={styles.UserInput___container}>
        <div className={styles.Input_icons}>
          
        <input
          className={styles.Inputfield}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
        <FontAwesomeIcon className={styles.icon} icon={icon}/>
        </div>
      
      </div>
      <div className={styles.Buttons___container}>
        <Button onClick={onClick} style={"primary"}>{buttonText}</Button> 
        </div>
    </>
  );
};
