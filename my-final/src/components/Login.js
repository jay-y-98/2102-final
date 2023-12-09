import React from 'react';


export const Login = (props) => {
    const {isBadLogin, onUserNameChange, onPasswordChange, onSubmit, onCreateUser} = props;


    return (
        <div>
            <h1>Login</h1>
            {isBadLogin && <h2>Please enter correct username and password</h2>}
            <input type='text' placeholder='username' onChange={e => onUserNameChange(e.target.value)} />
            <input type='password' placeholder='password' onChange={e => onPasswordChange(e.target.value)} />
            <button onClick={onSubmit}>Login</button>
            <button onClick={onCreateUser}>create user</button>
        </div>
    )
}