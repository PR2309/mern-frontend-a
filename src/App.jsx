import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {ConditionalRendering1, ConditionalRendering2, ConditionalRendering3} from './components/ConditionalRendering';
import { Functions1 } from './components/Functions';
import { Hooks1_useState } from './components/Hooks';
import CricketDashboard from './components/CricketDashboard';
import RegisterationForm from './components/RegisterationForm';
import { Register1, Register2 } from './components/Register';


function App() {

  return (
    <>
      <div className="App-Container">
        <h1 style={{backgroundColor:"orange"}}>MERN FRONTEND</h1>
      </div>
      {/* <ConditionalRendering1 age={21} /> */}
      {/* <ConditionalRendering2 age={21} /> */}
      {/* <ConditionalRendering3 age={21} /> */}
      {/* <Functions1 /> */}
      {/* <Hooks1_useState/> */}
      {/* <Register1/> */}
      {/* <Register2/> */}

      {/* Assignments */}
      {/* <CricketDashboard/> */}
      <RegisterationForm/>
      <h1>This is Footer</h1>
    </>
  );
};

const Home1 = () => {
  let name = "Name ABC";
  return (
    <>
      <h1>Hello {name}</h1>
      <p>Welcome to the home page!</p>
    </>
  );
};
const Home2 = (props) => {
  let name = "Name ABC";
  return (
    <>
      <h1 style={{backgroundColor:"red",color:"blue"}}>Hello {name}, you are {props.age} years old.</h1>
      <p>Welcome to the home page!</p>
    </>
  );
};

export { Home1, Home2 };
export default App;
