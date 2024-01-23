import Question from "./Question.jsx"

function TriviaPage(props) {
    function test() {
      console.log(props.allPossibleAnswers)
    }
    // Create for loops to generate Quesntion components?
    const questionComponents = []
    for(let i = 0; i < props.allQuestions.length; i++) {
      questionComponents.push(
        <Question 
          question={props.allQuestions[i]}
          possibleAnswers={props.allPossibleAnswers[i]}
          selectAnswer={props.selectAnswer}
          questionNum={i + 1}
        />
      )
    }

    return (
        <>
          {questionComponents}
          <button className="check-answers" onClick={test}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage