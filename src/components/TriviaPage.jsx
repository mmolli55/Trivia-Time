import Question from "./Question.jsx"
import { useState, useEffect } from 'react'

function TriviaPage(props) {
    function test() {
      console.log()
    }

    return (
        <>
          <Question 
            question={props.allQuestions[0]}
            possibleAnswers={props.allPossibleAnswers[0]}
          />
          <Question 
            question={props.allQuestions[1]}
            possibleAnswers={props.allPossibleAnswers[1]}
          />
          <Question 
            question={props.allQuestions[2]}
            possibleAnswers={props.allPossibleAnswers[2]}
          />
          <Question 
            question={props.allQuestions[3]}
            possibleAnswers={props.allPossibleAnswers[3]}
          />
          <Question 
            question={props.allQuestions[4]}
            possibleAnswers={props.allPossibleAnswers[4]}
          />
          <button className="check-answers" onClick={test}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage