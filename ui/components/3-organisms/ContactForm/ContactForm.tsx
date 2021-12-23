import React, { KeyboardEvent, ChangeEvent, useState } from "react";
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
  let [inputStep, setInputStep] = useState<string>("name");
  let [inputs] = useState<Array<string>>([]);

  let [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = (type: string, input: string) => {
    setInputStep(type);
    inputs.push(input);
  };

  const handleKeyboardEvent = (
    e: KeyboardEvent<HTMLInputElement>,
    type: string,
    input: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("pressed enter");
      setInputStep(type);
      inputs.push(input);
    }
  };

  const handleChange = (key: string, value: string) => {
    setUserInputs((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submit = () => {
    console.log(userInputs);
    setInputStep('done')
  };

  const submitOnkeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(userInputs);
      setInputStep('done')
    }
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
            ) : (
              <div className={styles.UserInput} key={index}>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                <p className={styles.Paragraph}>{item}</p>
              </div>
            );
          })}
          {inputs}
        </div>
        <div>
          {inputStep === "name" ? (
            <InputForm
              value={userInputs.name}
              placeholder={"Fill in your name"}
              onChange={(e) => handleChange("name", e.target.value)}
              onClick={(e) => handleClick("email", userInputs.name)}
              onKeyPress={(e) =>
                handleKeyboardEvent(e, "email", userInputs.name)
              }
              type={"name"}
              icon={faUser}
              buttonText={"NEXT"}
            />
          ) : inputStep === "email" ? (
            <InputForm
              value={userInputs.email}
              placeholder={"this time your email"}
              onChange={(e) => handleChange("email", e.target.value)}
              onClick={() => handleClick("message", userInputs.email)}
              onKeyPress={(e) =>
                handleKeyboardEvent(e, "message", userInputs.email)
              }
              type={"email"}
              icon={faEnvelope}
              buttonText={"NEXT"}
            />
          ) : inputStep === 'message' ?(
            <InputForm
              value={userInputs.message}
              placeholder={"lastly your message "}
              onChange={(e) => handleChange("message", e.target.value)}
              onClick={() => submit()}
              onKeyPress={(e) => submitOnkeyPress(e)}
              type={"message"}
              icon={faComment}
              buttonText={"SUBMIT"}
            />
          )
        : 'done'
        }
        </div>
      </Container>
    </>
  );
};
