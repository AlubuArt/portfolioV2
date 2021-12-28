import { NextPage } from "next";
import React from "react";
import styles from '../styles/wrapper.module.css';
import UnderConstruction from "../ui/components/3-organisms/UnderConstruction/UnderConstruction";


const AboutPage: NextPage = ({}) => {

     return (
      <div className={styles.wrapper}>
      <UnderConstruction pageTitle={"about"} />
      </div>
     )
}

export default AboutPage;
