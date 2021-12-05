import {useState} from 'react';
import type { NextPage } from 'next';
import {Button} from '../ui/components/1-atoms/Button/index';
import {Card} from '../ui/components/1-atoms/Card/index';

const Home: NextPage = () => {

  let [buttonName, setButtonName] = useState("Button")

  const handleClick = () => {
    console.log("clicked")
    setButtonName("clicked")
  }

  
  return (
    <>
    <h1>Hello world</h1>
    <Button style={"primary"} onClick={() => handleClick()}>{buttonName}</Button>
    <Button style={"CTA___primary"} onClick={() => handleClick()}>{buttonName}</Button>
    <Button style={"CTA___secondary"} onClick={() => handleClick()}>{buttonName}</Button>
    <Card style={"frosted"} size={"small"} onClick={() => handleClick()}>{}</Card>
    
    </>
  )
}

export default Home
