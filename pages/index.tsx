import {useState} from 'react';
import type { NextPage } from 'next';
import {Button} from '../ui/components/1-atoms/Button/index';
import {Card} from '../ui/components/1-atoms/Card/index';
import { Heading } from '../ui/components/1-atoms/Heading/Heading';
import { ProjectHeader } from "../ui/components/3-organisms/ProjectHeader";

const Home: NextPage = () => {

  let [buttonName, setButtonName] = useState("Button")

  const handleClick = () => {
    console.log("clicked")
    setButtonName("clicked")
  }

  
  return (
    <>
    <Button style={"primary"} onClick={() => handleClick()}>{buttonName}</Button>
    <Button style={"CTA___primary"} onClick={() => handleClick()}>{buttonName}</Button>
    <Button style={"CTA___secondary"} onClick={() => handleClick()}>{buttonName}</Button>
    <Card style={"frosted"} size={"small"} onClick={() => handleClick()}>{}</Card>
    {/* <Heading type="h1" tag="h1">This is a heading</Heading> */}
    <div>
      <ProjectHeader title="sponsormatch.dk" description="Short description" onClick={handleClick}></ProjectHeader>
    </div>
    </>
  )
}

export default Home
