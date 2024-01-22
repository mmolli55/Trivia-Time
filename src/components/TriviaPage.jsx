import Question from "./Question.jsx"

function TriviaPage(props) {
    function test() {
      console.log(answerOptions)
    }

    const triviaObject = props.triviaData
    
    /* Generates array of all quiz questions */
    const questions = triviaObject.map(item => item.question)
    
    /* Generates array of arrays, each nested array contains all possible answers 
    for an individual question */
    const answerOptions = triviaObject.map(item => {
      let possibleAnswers = []

      const correctAnswer = {
        value: item.correct_answer,
        isCorrect: true
      }
      possibleAnswers.push(correctAnswer)

      for(let i = 0; i < item.incorrect_answers.length; i++) {
        const incorrectAnswer = item.incorrect_answers[i]
        possibleAnswers.push({value: incorrectAnswer, isCorrect: false})
      }

      return possibleAnswers
    })

    return (
        <>
          <Question 
            question={questions[0]}
            answerOptions={answerOptions[0]}
          />
          <Question 
            question={questions[1]}
            answerOptions={answerOptions[1]}
          />
          <Question 
            question={questions[2]}
            answerOptions={answerOptions[2]}
          />
          <Question 
            question={questions[3]}
            answerOptions={answerOptions[3]}
          />
          <Question 
            question={questions[4]}
            answerOptions={answerOptions[4]}
          />
          <button className="check-answers" onClick={test}>
                Check Answers
          </button>
        </>
    )
}

export default TriviaPage