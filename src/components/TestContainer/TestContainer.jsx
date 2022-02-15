import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";

const TestContainer = ({
  SelectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  // const timeRemaining = 30; //time remaining
  return (
    <div className="test-container">
      {/* conditionally rendering time */}

      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <TypingChallengeContainer
            SelectedParagraph={SelectedParagraph}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            testInfo={testInfo}
            words={words}
            characters={characters}
            wpm={wpm}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}

      {/* Typing Challenge Container */}
    </div>
  );
};

export default TestContainer;
