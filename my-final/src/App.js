import React, { useState } from 'react';
import {
  Questions,
  Results,
  Login,
  CreateAccount
} from './components';

import {questions, correctAnswers} from './constants'

function App() {
  const [currPage, setCurrPage] = useState();
  const [answers, setAnswers] = useState(Array(questions.length).fill(''))
  const [createdAccounts, setCreatedAccounts] = useState([]) // {username: string, password: string}[]
  const [currCreateUserName, setCurrCreateUserName] = useState('');
  const [currCreatePassword, setCurrCreatePassword] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isIncorrectLogin, setIsIncorrectLogin] = useState(false)
  


  switch(currPage) {
    case 'create': {
      return <CreateAccount 
      onUserNameChange={(input) => {setCurrCreateUserName(input)}}
      onPasswordChange={(input) => {setCurrCreatePassword(input)}}
      onSubmit={()=> {
        setCreatedAccounts([...createdAccounts, {
          username: currCreateUserName,
          password: currCreatePassword
        }]);
        setCurrPage('login');
      }}
      />
    }
    case 'questions': {
      return <Questions 
        questions={questions}
        answers={answers}
        onAnswerInputChange= {(index, answer) => {
          setAnswers(currAnswers => {
            currAnswers[index] = answer;
            return currAnswers
          })
        }}
        onSubmitAnswers={() =>{
          setCurrPage('results')
        }}
      />
    }
    case 'results': {
      return <Results 
        results={answers.map((answer, index)=> ({
          correct: answer===correctAnswers[index],
          question: questions[index],
          answer: answers[index],
          correctAnswer: correctAnswers[index]
        }))}
        percentScore={answers.filter((answer, index) => answer === correctAnswers[index]).length/correctAnswers.length * 100}
      />
    }
    case 'login':
    default: {
      return <Login 
        onSubmit={()=> {
          const accountFound = createdAccounts.find(account => (account.username === loginUser && account.password === loginPassword))
          if(accountFound){
            setCurrPage('questions')
          } else {
            setIsIncorrectLogin(true)
          }
        }}
        isBadLogin={isIncorrectLogin}
        onUserNameChange={(input)=> {
          setLoginUser(input)}}
        onPasswordChange={(input) => {setLoginPassword(input)}}
        onCreateUser={() => {setCurrPage('create')}}
      />
    }
  }
}

export default App;
