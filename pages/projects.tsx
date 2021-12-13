import React from "react";
import type { NextPage } from "next";
import { ProjectHeader } from "../ui/components/3-organisms/ProjectHeader";
import { ProjectDescription } from "../ui/components/3-organisms/ProjectDescription";
import { Gallery } from "../ui/components/3-organisms/Gallery";

 
const Projects: NextPage = () => {


    const handleClick = () => {
    console.log("clicked");
    }

    return (
        <div
        style={{ maxWidth: "800px", marginRight: "auto", marginLeft: "auto" }}
      >
        <div>
          <ProjectHeader
            title="sponsormatch.dk"
            description="Get Things Done er en klassisk todo applikation, hvor man kan tilføje, slette og ændre status på todos, samt sætte deadlines for hver todo."
            onClick={handleClick}
          ></ProjectHeader>
        </div>
      </div>
    )
}



export default Projects