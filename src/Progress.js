function Progress({ index, numOfQuestions, points, totalPoints, answer }) {
  return (
    <div className="progress">
      <progress
        className=""
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numOfQuestions}
        </strong>
      </p>
      <p>
        <strong>
          {points}/{totalPoints}
        </strong>
      </p>
    </div>
  );
}

export default Progress;
