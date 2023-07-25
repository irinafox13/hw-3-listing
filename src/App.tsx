import { useState, useEffect } from 'react'
import {data} from './components/Data'
import Listing from './components/Listing'
import './App.css'

function App() {
  const [list, setList] = useState([])

  useEffect(()=>{
		setList(data);
	}, [])
  return (
    <>
      <Listing items={list}/>
    </>
  )
}

export default App
