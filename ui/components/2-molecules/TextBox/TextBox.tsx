import React from "react";
import { Container } from "../../4-Layouts/Container";
import styles from './TextBox.module.css'




interface TextBoxProps {
    text: string;
    author: string;
}


export const TextBox: React.FC<TextBoxProps> = ({text, author}) => (





        <Container type={"textBox"} >
            <div className={styles.TextBoxParagraph} dangerouslySetInnerHTML={{ __html: text }}/>
            <p className={styles.author}>- {author}</p>
        </Container>
    
)