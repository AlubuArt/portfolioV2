import React from "react";
import Image from "next/image";
import { Button } from "../../../1-atoms/Button";
import styles from "./HeroV2.module.css";
import { useRouter } from "next/router";
import SnippetImage from '../../../../../public/Images/carbon.svg'

export interface HeroProps {
    heroTitle: string;
    heroSubtitle: string;
    onClick: string;
}

export const HeroV2: React.FC<HeroProps> = ({
    heroTitle,
    heroSubtitle,
    onClick,
}) => {

    const router = useRouter();
    const handleClick = (page: string) => {
        router.push(page)
    };

    return (
        <div className={styles.PageWrapper}>
            <div className={styles.hero_content}>
                <div className={styles.hero_title}>
                    Hi! My name is Jacob 👋 - I{" "}
                    <span className={styles.blue}>design</span> and{" "}
                    <span className={styles.blue}>develop </span> digital
                    products
                </div>
                <div className={styles.hero_subtitle}>
                    This is my personal website - allways under construction, so
                    be sure to wear a hard hat. Lets take a look at all the fun
                    stuff, that I enjoy building.
                </div>
                <div className={styles.hero_cta}>
                    <div className={styles.hero_buttons}>
                        <Button
                            style={"CTA___primary"}
                            onClick={() => handleClick("/projects")}
                        >
                            see projects
                        </Button>
                        <Button
                            style={"CTA___secondary"}
                            onClick={() => handleClick("/contact")}
                        >
                            contact me
                        </Button>
                    </div>
                    <div className={styles.hero_splash}>
                        <p className={styles.hero_splash_p}>
                            or just jump right over to the awesome contact form!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.hero_image}>
                <Image className={""} src={SnippetImage} height={"1414"} width={"1852"} alt={"edef"}/> 
            </div>
        </div>
    );
};

export default HeroV2;
