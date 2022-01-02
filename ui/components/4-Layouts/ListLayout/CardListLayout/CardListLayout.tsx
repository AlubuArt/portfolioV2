import React from "react";
import styles from "./CardListLayout.module.css";
import { ProjectCard } from "../../../2-molecules/ProjectCard";
import { useRouter } from "next/router";

export interface CardListLayoutProps {
  projects: Models.Project[];
}

export const CardListLayout: React.FC<CardListLayoutProps> =  ({ projects }) => {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };
  return (
   <div className={styles.CardListLayout___container}>
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
   </div>
      
        
          
       
      
   
  );
};
