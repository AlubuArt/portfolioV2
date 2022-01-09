import React from "react";
import { ExperienceCard } from "../../../2-molecules/ExperienceCard";
import { Container } from "../../Container";
import { ListItem } from "../../../2-molecules/ListItem";

interface ListLayoutProps {
    list: [];
    type: "youtube" | "experience";
}

export const ListLayout: React.FC<ListLayoutProps> = ({ list, type }) => {
    return (
        <Container spacing={"sm"}>
            {type === "youtube"
                ? list.map((item, index: number) => {
                      return (
                          <div key={index}>
                              <ListItem items={item}></ListItem>
                          </div>
                      );
                  })
                : 
                
                <Container type={"experienceList"}> {
                     list.map((item, index: number) => {
                      return (
                          <div key={index}>
                              <ExperienceCard experience={item} />
                          </div>
                      );
                  })  }
                </Container>
             
            }
        </Container>
    );
};
