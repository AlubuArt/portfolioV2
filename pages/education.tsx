import { NextPage } from "next";
import React from "react";
import UnderConstruction from "../ui/components/3-organisms/UnderConstruction/UnderConstruction";
import styles from '../styles/wrapper.module.css';


const EducationPage: NextPage = ({}) => {

     return (
      <div className={styles.wrapper}>
      <UnderConstruction pageTitle={"education"} />
      </div>
     )
}

export default EducationPage;
