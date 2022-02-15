import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetterInfo }) => {
  const { status } = individualLetterInfo;
  // let statusClass;

  const statusClass = {
    correct: "test-letter-correct",
    incorrect: "test-letter-incorrect",
    notAttempted: "test-letter-not-attempted",
  }[status];
  /* not use this way - define a js object , a sort of js dictiornary key value pair
    if(status === "correct"){
        statusClass ="test-letter-correct";
    } else if (status === "incorrect") {
        statusClass = "test-letter-incorrect";
        }
        else {
            statusClass="test-letter-not-attempted";
        }*/

  return (
    <span className={`test-letter ${statusClass}`}>
      {individualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
