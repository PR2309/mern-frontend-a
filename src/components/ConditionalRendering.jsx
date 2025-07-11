import React from 'react';

const ConditionalRendering1 = ({age}) => {
    // Conditonal Rendering
    if(age>18)return (<h2>Welcome</h2>);
    else return (<h2>Not Allowed</h2>);
};
const ConditionalRendering2 = ({age}) => {
    // Conditonal Rendering
    return age>18?<h2>Welcome</h2>:<h2>Not Allowed</h2>;
};
const ConditionalRendering3 = ({age}) => {
    // Conditonal Rendering
    return age>18 && <h2>Welcome</h2>;
};

export {ConditionalRendering1, ConditionalRendering2, ConditionalRendering3};