function FinishedScreen({ points, totalPoints, highScore, dispatch }) {
  const percentage = Math.ceil((points / totalPoints) * 100);
  let emoji;
  if (percentage === 100) {
    emoji = "🏅";
  } else if (percentage >= 75 && percentage < 100) {
    emoji = "🤗";
  } else if (percentage >= 50 && percentage < 75) {
    emoji = "🙂";
  } else if (percentage >= 35 && percentage < 50) {
    emoji = "🤨";
  } else {
    emoji = "😥";
  }
  return (
    <>
      <div className="result">
        <p>
          <span>{emoji}</span> You have scored {points} out of {totalPoints} (
          {percentage}%)
        </p>
        <p className="highScore">(High Score {highScore})</p>
      </div>
      <button
        className="btn btn-ui btn-restart"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
