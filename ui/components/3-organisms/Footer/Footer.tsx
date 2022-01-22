import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Heading } from "../../1-atoms/Heading";
import GithubIcon from "../../../../public/GitHub-Mark-Light-64px.png";
import LinkedInIcon from "../../../../public/iconmonstr-linkedin-3 [Converted].png";
import styles from './Footer.module.css';

const Footer: React.FC<{}> = ({}) => {
    const router = useRouter();

    const handleClick = (url: string) => {
        router.push(url);
    };

    return (
        <div className={styles.footer}>
            <div className={styles.footer_left}>
                <Heading className={styles.heading} type={"h3"} tag={"h3"}>
                    contact
                </Heading>
                <p className={styles.text}>jc@jcvisueldesign.dk</p>
                <p className={styles.tagline}>
                    made with love, care, nextjs and semicolons
                </p>
            </div>
            <div className={styles.footer_right}>
                <div className={styles.icon} onClick={() => handleClick("https://github.com/AlubuArt")}>
                    <Image  height={30} width={30} src={GithubIcon} alt={"sefs"}/>
                </div>
                <div className={styles.icon} onClick={() => handleClick("https://www.linkedin.com/in/jacob-christensen-konceptudvikling/")}>
                    <Image  height={30} width={30} src={LinkedInIcon} alt={"sefs"}/>
                </div>
                
                
            </div>
        </div>
    );
};

export default Footer;
