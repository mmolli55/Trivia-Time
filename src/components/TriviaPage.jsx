import Question from "./Question.jsx"
import { useState, useEffect } from 'react'

function TriviaPage(props) {
    function test() {
      console.log(props.allPossibleAnswers)
    }
    // Create for loops to generate Quesntion components?
    return (
        <>
          <Question 
            question={props.allQuestions[0]}
            possibleAnswers={props.allPossibleAnswers[0]}
            selectAnswer={props.selectAnswer}
            questionNum={1}
          />
          <Question 
            question={props.allQuestions[1]}
            possibleAnswers={props.allPossibleAnswers[1]}
            selectAnswer={props.selectAnswer}
            questionNum={2}
          />
          <Question 
            question={props.allQuestions[2]}
            possibleAnswers={props.allPossibleAnswers[2]}
            selectAnswer={props.selectAnswer}
            questionNum={3}
          />
          <Question 
            question={props.allQuestions[3]}
            possibleAnswers={props.allPossibleAnswers[3]}
            selectAnswer={props.selectAnswer}
            questionNum={4}
          />
          <Question 
            question={props.allQuestions[4]}
            possibleAnswers={props.allPossibleAnswers[4]}
            selectAnswer={props.selectAnswer}
            questionNum={5}
          />
          <button className="check-answers" onClick={test}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage