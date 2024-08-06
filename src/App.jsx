import { useState } from 'react'
import './App.css'
import BirthdayCard from './components/birthday-card/BirthdayCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BirthdayCard/>
    </>
  )
}

export default App
