import React from "react";

export const Result = (props) => {
    const {correct, answer, correctAnswer, question} = props;

    if(correct){
        return <div>
            <h4>{question}</h4>
            <h6>Answered correctly</h6>
            <p>Your answer: {answer}</p>
        </div>
    } else {
        return <div>
            <h4>{question}</h4>
            <h6>Answered <strong>INCORRECTLY, LOSE POINTS</strong></h6>
            <p>Your answer: {answer}</p>
            <p>Correct answer: {correctAnswer}</p>
        </div>
    }
}