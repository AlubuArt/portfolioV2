import { NextPage } from "next";
import React from "react";
import { ContactForm } from "../ui/components/3-organisms/ContactForm";
import { Container } from "../ui/components/4-Layouts/Container";

const ContactPage: NextPage = ({}) => {
    return (
        <Container type={"contact"} spacing={"lg"}>
            <ContactForm />
        </Container>
    );
};

export default ContactPage;
