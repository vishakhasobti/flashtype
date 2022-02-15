import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({
  // selectedParagraph,
  timerStarted,
  timeRemaining,
  testInfo,
  onInputChange,
}) => {
  // console.log("inside typing challenge-",testInfo);
  return (
    <div className="typing-challenge">
      <div className="timer-cont">
        <p className="timer">
          {/* if timer foes less than into single digit then conditoinal stmt `` inject variable or string*/}
          00:
          {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
        </p>
        <p className="timer-info">
          {/* Start typing to start the test */}
          {/* {!timerStarted ? "Start typing to start the test" : undefined} */}
          {!timerStarted && "Start typing to start the test"}
        </p>
      </div>

      <div className="textarea-cont">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {/* {selectedParagraph} */}
            {testInfo.map((individualLetterInfo, index) => {
              // return <div> {individualLetterInfo.testLetter} </div>
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>

        <div className="textarea-right">
          <textarea
            // event
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
