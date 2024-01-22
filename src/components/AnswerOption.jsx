function AnswerOption(props) {
    const styles = {
        backgroundColor: props.selected ? "#00BBF9" : "transparent"
    }
    return (
        <button style={styles} className="answer-option">{props.value}</button>
    )
}

export default AnswerOption