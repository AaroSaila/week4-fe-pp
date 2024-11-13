import React, { useState } from 'react';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        const submissionData = {
            name,
            email,
            password
        };
        console.log(submissionData);
        
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <h2>Registration</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text' onChange={e => setName(e.target.value)} value={name}/>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' onChange={e => setPassword(e.target.value)} value={password}/>
                <button onClick={onSubmit}>Register</button>
            </form>
        </div>
    )
}
export default Registration;