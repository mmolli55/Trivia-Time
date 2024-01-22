function Question(props) {

    let answerOptionsElements = []
    for(let i = 0; i < props.answerOptions.length; i++) {
        let answerOption = props.answerOptions[i].value
        answerOptionsElements.push(
          <button className="answer-option" key={i}>{answerOption}</button>
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