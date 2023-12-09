import React from 'react';
import {Question} from './Question';

export const Questions = (props) => {
    const {
        questions, // string[]
        answers, // string[]
        onAnswerInputChange, // (index: number, answer: string) => void
        onSubmitAnswers // () => void
    } = props;


    return (
        <div>
            <h1>Questions</h1>
            {questions.map((question, index) => (
                <Question 
                    key={`question-${index}`}
                    question={question}
                    answer={answers[index]}
                    onAnswerInputChange={(answer)=>{
                        onAnswerInputChange(index, answer)
                    }}
                />
            ))}
            <button onClick={onSubmitAnswers}>Submit answers</button>
        </div>
    )
}