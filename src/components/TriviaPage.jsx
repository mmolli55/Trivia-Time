function TriviaPage(props) {
    function test() {
      console.log(answerOptions)
    }

    const triviaObject = props.triviaData

    let answerOptions = []

    const correctAnswer = {
        value: `${triviaObject[0].correct_answer}`,
        isCorrect: true
    }
    answerOptions.push(correctAnswer)

    for(let i = 0; i < 3; i++) {
      const incorrectAnswer = triviaObject[0].incorrect_answers[i]
      answerOptions.push({value: incorrectAnswer, isCorrect: false})
    }

    let answerOptionsElements = []
    for(let i = 0; i < answerOptions.length; i++) {
        let answerOption = answerOptions[i].value
        answerOptionsElements.push(
          <>
            <input 
              type="radio" 
              id={answerOption} 
              key={i}
              name="Q1-answer-option"
            />
            <label className="answer-option" htmlFor={answerOption}>{answerOption}</label>
          </> 
        )
    }

    return (
        <>
          <p>{triviaObject[0].question}</p>
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