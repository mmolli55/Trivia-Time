function AnswerOption(props) {
    const styles = {
        backgroundColor: props.selected ? "#00BBF9" : "transparent",
        border: props.selected ? "3px solid #00BBF9" : "3px solid #2A4494"
    }

    return (
        <button onClick={() => props.selectAnswer(props.value, props.forQuestionNum)} style={styles} className="answer-option">{props.value}</button>
    )
}

export default AnswerOption