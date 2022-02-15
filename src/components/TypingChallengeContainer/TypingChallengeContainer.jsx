import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css"

const TypingChallengeContainer = ({ 
    SelectedParagraph,words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange
}) => {
    return(
        <div className="typing-challenge-cont">
            {/* Details sec */}
            <div className="details-cont">
                {/* Words typed */}
                    <ChallengeDetailsCard cardName="words" cardValue={words} />
                {/* characters typed */}
                <ChallengeDetailsCard cardName="characters" cardValue={characters} />
                {/* speed */}

                <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />
            </div>



            {/* The real challenge */}
            <div className="typewriter-cont">
                {/* <p>This is the Real challenge</p> */}
                <TypingChallenge 
                timeRemaining={timeRemaining} 
                timerStarted={timerStarted} 
                selectedParagraph={SelectedParagraph}
                testInfo={testInfo}
                onInputChange={onInputChange} />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;