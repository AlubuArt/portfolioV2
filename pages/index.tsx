import React, { useState } from "react";
import type { NextPage } from "next";
import { Button } from "../ui/components/1-atoms/Button/index";
import { Card } from "../ui/components/1-atoms/Card/index";
import { Heading } from "../ui/components/1-atoms/Heading/Heading";
import { ProjectHeader } from "../ui/components/3-organisms/ProjectHeader";
import { ProjectDescription } from "../ui/components/3-organisms/ProjectDescription";
import { Gallery } from "../ui/components/3-organisms/Gallery";

const Home: NextPage = () => {
  let [buttonName, setButtonName] = useState("Button");

  const handleClick = () => {
    console.log("clicked");
    setButtonName("clicked");
  };

  return (
    <div style={{maxWidth: "800px", marginRight: "auto", marginLeft: "auto"}}>
      <div>

        <ProjectHeader
          title="sponsormatch.dk"
          description="Get Things Done er en klassisk todo applikation, hvor man kan tilføje, slette og ændre status på todos, samt sætte deadlines for hver todo."
          onClick={handleClick}
          ></ProjectHeader>
      </div>
      
      <div style={{ maxWidth: "800px" }}>
        <Gallery
          slides={[
            "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/sponsormatch.png?alt=media&token=a379dfa2-e761-49ff-934a-4fc84d15e373",
            "https://firebasestorage.googleapis.com/v0/b/jc-portofolio-93953.appspot.com/o/Sk%C3%A6rmbillede%202021-09-13%20kl.%2019.26.38.png?alt=media&token=7410d19d-0305-4348-9523-0a37a376ebd2",
          ]}
        ></Gallery>
      </div>
      <div>
        <ProjectDescription
          title="About this project"
          description="Get Things Done er en klassisk todo applikation, lavet med React og Typescript, stylet med CSS modules og bruger React Context API til at håndtere state. Med applikationen kan man tilføje, slette og ændre status på todos, samt sætte deadlines for hver todo."
          list={[]}
        ></ProjectDescription>
      </div>
      <div>
        <ProjectDescription
          title="tech used"
          description="in this project the following technologies was used"
          list={['react', 'firebase', 'Bootstrap', 'NextJS']}
        ></ProjectDescription>
      </div>
      <Button style={"primary"} onClick={() => handleClick()}>
        {buttonName}
      </Button>
      <Button style={"CTA___primary"} onClick={() => handleClick()}>
        {buttonName}
      </Button>
      <Button style={"CTA___secondary"} onClick={() => handleClick()}>
        {buttonName}
      </Button>
      <Card style={"frosted"} size={"small"} onClick={() => handleClick()}>
        {}
      </Card>
      {/* <Heading type="h1" tag="h1">This is a heading</Heading> */}
    </div>
  );
};

export default Home;
