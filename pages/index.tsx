import {useState} from 'react';
import type { NextPage } from 'next';
import {Button} from '../ui/components/1-atoms/Button/index'

const Home: NextPage = () => {

  let [buttonName, setButtonName] = useState("Button")

  const handleClick = () => {
    console.log("clicked")
    setButtonName("clicked")
  }

  
  return (
    <>
    <h1>Hello world</h1>
    
    </>
  )
}

export default Home
