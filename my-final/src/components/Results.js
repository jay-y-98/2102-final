import React from 'react';
import {Result} from './Result';

export const Results = (props) => {
    const {
        results, // {correct: boolean, question: string, answer: string, correctAnswer: string}[]
        percentScore, //string
    } = props;


    return (
        <div>
            <h1>You scored {percentScore}%</h1>
            {results.map((result, index) => (
                <Result 
                    key={`result-${index}`}
                    {...result}
                />
            ))}
        </div>
    )
}