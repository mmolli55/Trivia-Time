import Question from "./Question.jsx"

function TriviaPage(props) {
    function test() {
      console.log(questions)
    }

    const triviaObject = props.triviaData

    const questions = triviaObject.map(item => item.question)





    /*let answerOptions = []

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
          <button className="answer-option" key={i}>{answerOption}</button>
        )
    }*/

    return (
        <>
          <Question 
            question={questions[0]}
          />
          <Question 
            question={questions[1]}
          />
          <Question 
            question={questions[2]}
          />
          <Question 
            question={questions[3]}
          />
          <Question 
            question={questions[4]}
          />
          <button className="check-answers" onClick={test}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage