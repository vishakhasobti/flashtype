import React from "react";
import hero from "./../assets/hero.png"
import "./Landing.css"
import Typewriter from 'typewriter-effect';


const Landing = () => {
    return( 
        <div className="landing-container">
            <div className="landing-left">
                <h1 data-aos="fade-right" className="landing-header">Can you type...</h1>
                <div className="typewriter-container">
                    {/* <p>Fast?</p>
                    <p>Correct?</p>
                    <p>Quick</p> */}

                    {/* use typewriter  */}

                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?','Quick'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                </div>
                </div>
                <div className="landing-right">
                    <img 
                    data-aos="fade-left"
                    className="hero-image" 
                    src={hero} 
                    alt="hero" />
               
            </div>

        </div>
    );
}

export default Landing;