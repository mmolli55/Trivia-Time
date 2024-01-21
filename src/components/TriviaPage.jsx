function TriviaPage(props) {
    function test() {
      console.log(answerOptions)
    }

    let answerOptions = []

    const correctAnswer = {
        value: `${props.triviaData[0].correct_answer}`,
        isCorrect: true
    }
    answerOptions.push(correctAnswer)

    for(let i = 0; i < 3; i++) {
      const incorrectAnswer = props.triviaData[0].incorrect_answers[i]
      answerOptions.push({value: incorrectAnswer, isCorrect: false})
    }

    let answerOptionsElements=[]
    for(let i = 0; i < answerOptions.length; i++) {
        answerOptionsElements.push(
            <button key={i} className="answer-option">{answerOptions[i].value}</button>
        )
    }

    return (
        <>
          <p>{props.triviaData[0].question}</p>
          <div className="answer-container">
            {answerOptionsElements}
          </div>
          <button className="check-answers" onClick={test}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage