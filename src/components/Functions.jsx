import React from 'react';

export const Functions1 = () => {
    const handleClick = () => {
        alert("Button clicked!");
    };
    const handleSubmit = (name)=>{
        alert(`Hello ${name}`);
    }
    return (
        <>
            <h1>Hello World</h1>
            <button onClick={handleClick}>Click</button>
            <button onSubmit={()=>handleSubmit("John")}>Submit</button>
        </>
    );
};
// for onSubmit we need callback or it'll keep running automatically