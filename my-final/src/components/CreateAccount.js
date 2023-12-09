import React from 'react';


export const CreateAccount = (props) => {
    const {onUserNameChange, onPasswordChange, onSubmit} = props;
    return (
        <div>
            <h1>Create account</h1>
            <input type='text' placeholder='username' onChange={(e) => onUserNameChange(e.target.value)} />
            <input type='password' placeholder='password' onChange={(e) => onPasswordChange(e.target.value)} />
            <button onClick={onSubmit}>Create account</button>
        </div>
    )
}