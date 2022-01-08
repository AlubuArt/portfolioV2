import React from "react";
import { Container } from "../../Container";
import { ListItem } from "./ListItem";

interface ListLayoutProps {
    list: [] ;
}

export const ListLayout: React.FC<ListLayoutProps> = ({ list }) => {
    

    return (
        <Container>
            {list.map((item, index: number) => {
                return (
                    <div key={index}>
                        <ListItem items={item}></ListItem>
                    </div>
                );
            })}
        </Container>
    );
};
