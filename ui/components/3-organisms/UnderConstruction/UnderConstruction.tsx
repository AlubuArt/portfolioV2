import React from "react";
import { Button } from "../../1-atoms/Button";
import { useRouter } from "next/router";
import { PageHeader } from "../PageHeader";
import { Container } from "../../4-Layouts/Container";

export interface UnderConstructionProps {
    pageTitle: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageTitle }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push("./projects");
    };
    return (
        <Container spacing={"lg"}>
            <PageHeader
                title={pageTitle + " page..."}
                subtitle={"is under construction 👷"}
                type={"PageHeader"}
            />

            <Button onClick={handleClick}>{"see projects"}</Button>
        </Container>
    );
};

export default UnderConstruction;
