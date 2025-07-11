import React from 'react';
import { useState } from 'react';

const CricketDashboard = () => {
    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [message, setMessage] = useState("Welcome to the Cricket Dashboard!");

    const handleRun = () => {
        if(wickets<10){
            setRuns(runs + 1);
            setMessage("Well Done");
        }
    }
    const handleWicket = () => {
        if(wickets<10){
            setWickets(wickets + 1);
            setMessage("Better Luck Next Time!");
        }else{setMessage("All Out! Game Over...");}
    }
    return (
        <>
            <h1>Cricket Dashboard</h1>            
            <div>
                <button onClick={handleRun}>Run</button>
                <p>{runs}</p>
                <button onClick={handleWicket}>Wicket</button>
                <p>{wickets}</p>
            </div>
            <div>
                <p>Screen:</p>
                <p>{message}</p>
            </div>
        </>
    );
};

export default CricketDashboard;
