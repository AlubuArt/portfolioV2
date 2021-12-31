import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { PageHeader } from "../PageHeader";
import { useRouter } from "next/router";

interface HeroProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  onClick: string;
}

export const Hero: React.FC<HeroProps> = ({
  heroImage,
  heroTitle,
  heroSubtitle,
}) => {
  const router = useRouter();
  const handleClick = () => {
    console.log("clicked")
    router.push("/projects");
  };

  return (
    <div className={styles.Hero___wrapper}>
      <div className={styles.Hero___text___container}>
        <PageHeader
          type={"HeroHeader"}
          onClick={() => handleClick()}
          title={heroTitle}
          subtitle={heroSubtitle}
        />
      </div>
      <div className={styles.HeroImage___container}>
        <Image
          alt=""
          width={"2000"}
          height={"1110"}
          layout={"responsive"}
          src={heroImage}
          className={styles.image}
        />
      </div>
    </div>
  );
};
