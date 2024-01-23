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
      let associatedQuestion = triviaData.indexOf(item) + 1
      let possibleAnswers = []

      const correctAnswer = {
        value: decode(item.correct_answer),
        isCorrect: true,
        selected: false,
        associatedQuestion: associatedQuestion
      }
      possibleAnswers.push(correctAnswer)

      for(let i = 0; i < item.incorrect_answers.length; i++) {
        const incorrectAnswer = item.incorrect_answers[i]
        possibleAnswers.push({
          value: decode(incorrectAnswer), 
          isCorrect: false,
          selected: false,
          associatedQuestion: associatedQuestion
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

  function selectAnswer(value, num) {
    setAllPossibleAnswers(prevValue => {
      let newArrayOfArrays = prevValue.map(answerArray => {
        let nestedArray = answerArray.map(answer => {
          // I think if statement is needed here to fix bug of only one selection allowed on entire quiz
          // Create state for each question?
          // if answer.id != id, return {...answer}?
          
          if(answer.associatedQuestion === num  && answer.value === value) {
              return {...answer, selected: true}
          } else if (answer.associatedQuestion === num  && answer.value != value){
              return {...answer, selected: false}
          } else {
              return {...answer}
          }
          
          

        })
        return nestedArray
      })
      return newArrayOfArrays
    })

  }

  return (
    <>
      {showStartPage && <StartScreen startNewGame={startNewGame}/>}
      {!showStartPage && 
        <TriviaPage 
          allQuestions={allQuestions}
          allPossibleAnswers={allPossibleAnswers}
          selectAnswer={selectAnswer}
        />
      }
    </>
  )
}

export default App
