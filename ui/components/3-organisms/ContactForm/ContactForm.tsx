import React, { ChangeEvent, useState } from "react";
import { Container } from "../../4-Layouts/Container";
import { PageHeader } from "../PageHeader";
import styles from "./ContactForm.module.css";
import { InputForm } from "./InputForm/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons needed, and use as prop in INputForm component
import {
  faUser,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export const ContactForm: React.FC = () => {
  let [userInputName, setUserInputName] = useState<string>("");
  let [userInputEmail, setUserInputEmail] = useState<string>("");
  let [userInputMessage, setUserInputMessage] = useState<string>("");
  let [inputStep, setInputStep] = useState<string>("name");
  let [inputs] = useState<Array<string>>([]);

  const handleClick = (type: string, input: string) => {
    setInputStep(type);
    inputs.push(input);
  };

  const submit = () => {
    console.log(userInputMessage);
  };

  return (
    <>
      <Container width={"full"} spacing={"lg"}>
        <div className={styles.PageHeader___container}>
          <PageHeader
            title={"get in contact"}
            subtitle={
              "feel free to contact me about projects, collaborations, freelance work etc. use the form below, or send an email to jc@jcvisueldesign.dk"
            }
          />
        </div>
        <div className={styles.UserInput___container}>
          {inputs.map((item, index: number) => {
            return index === 0 ? (
              <div className={styles.UserInput} key={index}>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />
                <p className={styles.Paragraph}>{item}</p>
              </div>
            ) :  (
              <div className={styles.UserInput} key={index}>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                <p className={styles.Paragraph}>{item}</p>
              </div>
            ) 
          })}
          {inputs}
        </div>
        <div>
          {inputStep === "name" ? (
            <InputForm
              value={userInputName}
              placeholder={"Fill in your name"}
              onChange={(e) => setUserInputName(e.target.value)}
              onClick={(e) => handleClick("email", userInputName)}
              type={"name"}
              icon={faUser}
              buttonText={"NEXT"}
            />
          ) : inputStep === "email" ? (
            <InputForm
              value={userInputEmail}
              placeholder={"this time your email"}
              onChange={(e) => setUserInputEmail(e.target.value)}
              onClick={() => handleClick("message", userInputEmail)}
              type={"email"}
              icon={faEnvelope}
              buttonText={"NEXT"}
            />
          ) : (
            <InputForm
              value={userInputMessage}
              placeholder={"lastly your message "}
              onChange={(e) => setUserInputMessage(e.target.value)}
              onClick={() => submit()}
              type={"message"}
              icon={faComment}
              buttonText={"SUBMIT"}
            />
          )}
        </div>
      </Container>
    </>
  );
};
