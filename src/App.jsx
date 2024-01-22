import { useState, useEffect } from 'react'
import './App.css'
import StartScreen from './components/StartScreen.jsx'
import TriviaPage from './components/TriviaPage.jsx'

function App() {
  const [showStartPage, setShowStartPage] = useState(true)
  const [triviaData, setTriviaData] = useState([])
  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(data => setTriviaData(data.results))
  }, [])

  function startNewGame() {
    setShowStartPage(false)
  }

  return (
    <>
      {showStartPage && <StartScreen startNewGame={startNewGame}/>}
      {!showStartPage && <TriviaPage triviaData={triviaData}/>}
    </>
  )
}

export default App
