function AnswerOption(props) {
    let styles = {}
    
    const playingStyles = {
        backgroundColor: props.selected ? "#00BBF9" : "transparent",
        border: props.selected ? "3px solid #00BBF9" : "3px solid #2A4494"
    }

    const finishedCorrectAnswerStyles = {
        backgroundColor: props.isCorrect ? "#2CF6B3" : "transparent",
        border: props.isCorrect ? "3px solid #2CF6B3" : "3px solid #2A4494"
    }

    const finishedIncorrectAnswerStyles = {
        backgroundColor: props.isCorrect === false && props.selected === true ? "#FF1B1C" : "transparent",
        border: props.isCorrect === false && props.selected === true ? "3px solid #FF1B1C" : "3px solid #2A4494"
    }

    if(props.roundFinished === false) {
        styles = playingStyles
    } else if (props.roundFinished) {
        if(props.isCorrect) {
            styles = finishedCorrectAnswerStyles
        } else {
            styles = finishedIncorrectAnswerStyles
        }
    }

    return (
        <button onClick={() => props.selectAnswer(props.value, props.forQuestionNum)} 
                style={styles} 
                className="answer-option">
            {props.value}
        </button>
    )
}

export default AnswerOption