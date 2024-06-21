import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
        correctly <span onClick={resetQuiz}>Click here to retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}. {question.question}{" "}
              {!userAnswers[index] && (
                <span style={{ color: "green" }}>
                  Correct Answer :{" "}
                  {question.answerOptions.map(
                    (option) => option.isCorrect == true && option.text
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
