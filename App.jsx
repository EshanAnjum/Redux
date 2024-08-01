import { useState } from 'react'
import './App.css'
import Counter from './Components/Count'
import {useDispatch} from "react-redux"
import { Decrement_Count } from './redux/Actions'
import {Increment_Count} from "./redux/Actions"

import { useSelector } from 'react-redux'


function App() {

  const dispatch = useDispatch();


  return (
    // Dispatching our events
    <>
    <button type="button" onClick={() => {dispatch(Increment_Count())}}>Increment</button>
    <Counter/>
    
    <button onClick={() => {dispatch(Decrement_Count())}}>Decrement</button>
    </>
  )
}


export default App
