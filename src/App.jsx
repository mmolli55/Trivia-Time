import { useState } from 'react'
import './App.css'
import StartScreen from './components/StartScreen.jsx'

function App() {
  const [showStartPage, setShowStartPage] = useState(true)

  function startNewGame() {
    setShowStartPage(false)
  }
  return (
    <>
      {showStartPage && <StartScreen startNewGame={startNewGame}/>}
    </>
  )
}

export default App
