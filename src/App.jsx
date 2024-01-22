import { useState, useEffect } from 'react'
import './App.css'
import StartScreen from './components/StartScreen.jsx'
import TriviaPage from './components/TriviaPage.jsx'
import {decode} from 'html-entities'; //Decodes html entities the come from Open Trivia API

function App() {
  const [showStartPage, setShowStartPage] = useState(true)
  const [triviaData, setTriviaData] = useState([])
  const [allQuestions, setAllQuestions] = useState([])
  const [allPossibleAnswers, setAllPossibleAnswers] = useState([])
  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(data => setTriviaData(data.results))
  }, [])

  useEffect(() => {
    /* Generates array of all quiz questions */
    setAllQuestions(triviaData.map(item => decode(item.question)))
  }, [triviaData])

  useEffect(() => {
    /* Generates array of arrays, each nested array contains all possible answers 
    for an individual question */
    const answerOptions = triviaData.map(item => {
      let possibleAnswers = []

      const correctAnswer = {
        value: decode(item.correct_answer),
        isCorrect: true,
        selected: true
      }
      possibleAnswers.push(correctAnswer)

      for(let i = 0; i < item.incorrect_answers.length; i++) {
        const incorrectAnswer = item.incorrect_answers[i]
        possibleAnswers.push({
          value: decode(incorrectAnswer), 
          isCorrect: false,
          selected: false,
        })
      }
      
      /* Randomize array in-place using Fisher-Yates (aka Knuth) Shuffle */
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

      const shuffledAnswers = shuffle(possibleAnswers)

      return shuffledAnswers
    })

    setAllPossibleAnswers(answerOptions)
  }, [triviaData])

  function startNewGame() {
    setShowStartPage(false)
  }

  return (
    <>
      {showStartPage && <StartScreen startNewGame={startNewGame}/>}
      {!showStartPage && 
        <TriviaPage 
          allQuestions={allQuestions}
          allPossibleAnswers={allPossibleAnswers}
        />
      }
    </>
  )
}

export default App
