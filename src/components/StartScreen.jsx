function StartScreen(props) {
    return (
        <>
            <h1 className="title">Trivia Time</h1>
            <h2 className="description">Click below for a quick round of trivia.</h2>
            <button onClick={props.startNewGame}>
                Start Round
            </button>
        </>
    )
}

export default StartScreen