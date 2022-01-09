import React from "react";
import { Container } from "../../4-Layouts/Container";
import styles from "./ExperienceCard.module.css";

interface ExperienceCardProps {
    experience: Models.Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experience,
}) => {
    return (
        <div className={styles.ExperienceCard_container}>
            <div>
                <p className={styles.company_container}>
                    {experience.companyName} {experience.dates}
                </p>
            </div>

            <div>
                <p className={styles.jobTitle_container}>{experience.jobTitle}</p>
            </div>

            <div>
                <p className={styles.link_container}>{experience.link} -{">"}</p>
            </div>
        </div>
    );
};
