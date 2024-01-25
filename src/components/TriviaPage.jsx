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

    return (
        <>
          {questionComponents}
          <button className="check-answers" onClick={props.checkAnswers}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage