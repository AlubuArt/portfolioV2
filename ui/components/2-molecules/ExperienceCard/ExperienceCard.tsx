import React from "react";
import { Container } from "../../4-Layouts/Container";
import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
    experiences?: Array<Models.Experience>;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experiences,
}) => {
    return (
        <div className={styles.ExperienceCard_container}>
            <div>
                <p className={styles.company_container}>
                    Aalborg University IT (2019- d.d)
                </p>
            </div>

            <div>
                <p className={styles.jobTitle_container}>UX & Web consultant</p>
            </div>

            <div>
                <p className={styles.link_container}>aau.dk -{">"}</p>
            </div>
        </div>
    );
};
