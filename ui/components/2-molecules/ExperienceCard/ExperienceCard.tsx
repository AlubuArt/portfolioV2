import React from "react";
import styles from "./ExperienceCard.module.css";
import { useRouter } from "next/router";

interface ExperienceCardProps {
    experience: Models.Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experience,
}) => {


    const router = useRouter();

    const handleClick = (slug: string) => {
        router.push(`https://www.${slug}`);
    };
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
                <p className={styles.link_container} onClick={() => handleClick(experience.link)}>{experience.link} -{">"}</p>
            </div>
        </div>
    );
};
