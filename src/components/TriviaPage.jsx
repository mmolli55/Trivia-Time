import Question from "./Question.jsx"
import {decode} from 'html-entities'; //Decodes html entities the come from Open Trivia API

function TriviaPage(props) {
    function test() {
      console.log(triviaObject)
    }

    const triviaObject = props.triviaData
    
    /* Generates array of all quiz questions */
    const questions = triviaObject.map(item => decode(item.question))
    
    /* Generates array of arrays, each nested array contains all possible answers 
    for an individual question */
    const answerOptions = triviaObject.map(item => {
      let possibleAnswers = []

      const correctAnswer = {
        value: decode(item.correct_answer),
        isCorrect: true,
        selected: false
      }
      possibleAnswers.push(correctAnswer)

      for(let i = 0; i < item.incorrect_answers.length; i++) {
        const incorrectAnswer = item.incorrect_answers[i]
        possibleAnswers.push({value: decode(incorrectAnswer), isCorrect: false})
      }
      
      /* Randomize array in-place using Fisher-Yates (aka Knuth) Shuffle */
      function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

      const shuffledAnswers = shuffle(possibleAnswers)

      return shuffledAnswers
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