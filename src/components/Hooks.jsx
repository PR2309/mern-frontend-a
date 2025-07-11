import React from 'react';
import { useState } from 'react';

const Hooks1_useState = () => {
    const [score,setScore]=useState(0);
    const increment = () => {
        setScore(score + 1);
    };
    const decrement = () => {
        setScore(score - 1);
    };
    const reset = () => {
        setScore(0);
    };
    return (
        <>
            <h3>useState:</h3>
            <p>Score: {score}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};


export { Hooks1_useState };