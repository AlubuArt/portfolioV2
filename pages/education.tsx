import { NextPage } from "next";
import React from "react";
import UnderConstruction from "../ui/components/3-organisms/UnderConstruction/UnderConstruction";
import { Container } from "../ui/components/4-Layouts/Container";

const EducationPage: NextPage = ({}) => {
    return (
        <Container spacing={"lg"}>
            <UnderConstruction pageTitle={"education"} />
        </Container>
    );
};

export default EducationPage;
