import React, { KeyboardEvent, useState } from "react";
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
import { Heading } from "../../1-atoms/Heading";

export const ContactForm: React.FC = () => {
  let [inputStep, setInputStep] = useState<string>("name");
  let [inputs, setInputs] = useState<Array<string>>([]);
  let [buttonText, setButtonText] = useState("SUBMIT");
  let [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNextClick = (type: string, input: string) => {
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
      setInputStep(type);
      inputs.push(input);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setUserInputs((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submit = () => {
    sendMail(userInputs);
  };

  const submitOnkeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMail(userInputs);
    }
  };

  const sendMail = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    setButtonText("Sending");

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    setInputStep("done");
    setInputs([]);
  };

  return (
    <>
      
        <PageHeader
          title={"get in contact"}
          subtitle={
            "feel free to contact me about projects, collaborations, freelance work etc. use the form below, or send an email to jc@jcvisueldesign.dk"
          }
        />
      
      <div className={styles.UserInputs}>
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
   
        {inputStep === "name" ? (
          <InputForm
            value={userInputs.name}
            placeholder={"Fill in your name"}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onClick={() => handleNextClick("email", userInputs.name)}
            onKeyPress={(e) => handleKeyboardEvent(e, "email", userInputs.name)}
            type={"name"}
            icon={faUser}
            buttonText={"NEXT"}
          />
        ) : inputStep === "email" ? (
          <InputForm
            value={userInputs.email}
            placeholder={"this time your email"}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onClick={() => handleNextClick("message", userInputs.email)}
            onKeyPress={(e) =>
              handleKeyboardEvent(e, "message", userInputs.email)
            }
            type={"email"}
            icon={faEnvelope}
            buttonText={"NEXT"}
          />
        ) : inputStep === "message" ? (
          <InputForm
            value={userInputs.message}
            placeholder={"lastly your message "}
            onChange={(e) => handleInputChange("message", e.target.value)}
            onClick={() => submit()}
            onKeyPress={(e) => submitOnkeyPress(e)}
            type={"message"}
            icon={faComment}
            buttonText={buttonText}
          />
        ) : inputStep === "done" ? (
          <Container>
            <Heading tag={"h2"} type={"h2"}>
              {"Nice!"}
            </Heading>
            <Heading tag={"h3"} type={"h3"}>
              {"Your awesome message was sent successfully. "}
            </Heading>{" "}
          </Container>
        ) : (
          "not working"
        )}
  
    </>
  );
};
