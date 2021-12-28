import React, { useState } from "react";
import { Button } from "../../1-atoms/Button";
import { Heading } from "../../1-atoms/Heading";
import { Paragraph } from "../../1-atoms/Paragraph";
import { Container } from "../../4-Layouts/Container";
import styles from "./UnderConstruction.module.css";
import { useRouter } from "next/router";
import { PageHeader } from "../PageHeader";

export interface UnderConstructionProps {
  pageTitle: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageTitle }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("./projects");
  };
  return (
    <div className={styles.PageWrapper}>
        <Container width={"lg"}>
        <PageHeader 
            title={pageTitle + ' page...'}
            subtitle={"is under construction 👷"}
            type={"PageHeader"} />
            <Container width={'lg'}>
                 <Button onClick={handleClick}>{"see projects"}</Button>
            </Container>
       
      </Container>
    </div>
  );
};

export default UnderConstruction;
