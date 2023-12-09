import React from 'react';


export const Question = (props) => {
    const {
        question, // string
        onAnswerInputChange // (answer: string) => void
    } = props;


    return (
        <div>
            <h4>{question}</h4>
            <input type='text' onChange={e => onAnswerInputChange(e.target.value)} />
        </div>
    )
}