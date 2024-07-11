/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Play from './Play'


function App() {
  const [text,setText]=useState("");
  const AddTextHandler=(e)=>{
    setText(e.target.value);
  }
  return (
    <>
    <div className="wrapper">
      <h1>Convert your <span>text</span> to a <span>speech </span> </h1>
      <textarea onChange={AddTextHandler} placeholder='write your text here...'></textarea>
        <Play  text={text}/>
    </div>

    </>
  )
}

export default App
