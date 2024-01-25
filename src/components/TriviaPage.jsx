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
          roundFinished={props.roundFinished}
          key={i}
        />
      )
    }

    let playerScore = props.calculateScore()
    
    console.log(props.allPossibleAnswers)
    return (
        <>
          {questionComponents}
          {props.roundFinished === true && <p>You answered {playerScore} / 5 questions correctly. {playerScore === 5 && "Congrats!"}</p>}
          <button className="check-answers" onClick={props.checkAnswers}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage