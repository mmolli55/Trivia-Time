import Question from "./Question.jsx"
function TriviaPage(props) {
    const questionComponents = []
    for(let i = 0; i < props.allQuestions.length; i++) {
      questionComponents.push(
        <Question 
          question={props.allQuestions[i]}
          possibleAnswers={props.allPossibleAnswers[i]}
          selectAnswer={props.selectAnswer}
          questionNum={i + 1}
          isAnswering={props.isAnswering}
          key={i}
        />
      )
    }

    let playerScore = props.calculateScore()

    return (
        <>
          {questionComponents}
          {props.isAnswering === false && 
            <p className="results">You answered {playerScore} / 5 questions correctly. {playerScore === 5 && "Congrats!"}</p>
          }

          <button className="check-answers" onClick={props.checkAnswers}>
                {props.isAnswering ? "Check Answers" : "Play again"}
          </button>
        </>
    )
}

export default TriviaPage