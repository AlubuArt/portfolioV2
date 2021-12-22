import { NextPage } from "next";
import React from "react";
import { ContactForm } from '../ui/components/3-organisms/ContactForm';
import styles from '../styles/wrapper.module.css';


const ContactPage: NextPage = ({}) => {

     return (
        <div className={styles.wrapper}>
        <ContactForm />
        </div>
     )
}

export default ContactPage;
