import React from "react";
import styles from "./CardListLayout.module.css";
import { ProjectCard } from "../../../2-molecules/ProjectCard";
import { useRouter } from "next/router";
import { Container } from "../../Container";

export interface CardListLayoutProps {
  projects: Models.Project[];
}

export const CardListLayout: React.FC<CardListLayoutProps> =  ({ projects }) => {
  const router = useRouter();

  console.log(projects[0].projectPictures[0].url)

  const handleClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };
  return (
   <>
   {projects.map((item, index: number) => {
            return (
              <div key={index} className={styles.listItem}>
                <ProjectCard
                  title={item.projectTitle}
                  description={item.description}
                  onClick={() => handleClick(item.slug)}
                  image={item.pictureUrl}
                />
              </div>
            );
          })}
   </>
      
        
          
       
      
   
  );
};
