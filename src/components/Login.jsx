import React from 'react';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        e
    }
    return (
        <>
        <fieldset>
            <legend>Login</legend>
            <form method="POST" onSubmit={handleSubmit}>
                
            </form>
        </fieldset>
        </>
    );
};

export default Login;
