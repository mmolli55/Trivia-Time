import AnswerOption from "./AnswerOption"

function Question(props) {

    let answerOptionsElements = []
    for(let i = 0; i < props.possibleAnswers.length; i++) {
        answerOptionsElements.push(
          <AnswerOption 
            value={props.possibleAnswers[i].value}
            selected={props.possibleAnswers[i].selected}
            isCorrect={props.possibleAnswers[i].isCorrect}
            key={i}
            selectAnswer={props.selectAnswer}
            forQuestionNum={props.questionNum}
            isAnswering={props.isAnswering}
          />
        )
    }

    return (
        <>
          <p className="question-text">{props.question}</p>
          <div className="answer-container">
            {answerOptionsElements}
          </div>
          <hr />
        </>
    )
}

export default Question