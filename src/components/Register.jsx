import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Register.css';
import axios from 'axios';

// Controlled Component
// In controlled component, we use state to store the values of the input fields.
const Register1 = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const navigate=useNavigate();
    const url = "http://localhost:8080/api/users/register"; // API endpoint for registration
    const handleSubmit= async ()=>{
        console.log(user);
        try{
            const result = await axios.post(url,user);
            setError("Data saved successfully");
            navigate('/login');
        }catch(err){
            setError("Error during registration");
        }
        
    }
    return(
        <>
            <div className="App-Register-Row">
                <div style={{backgroundColor:"white"}}>
                    <h2>Registeration Form</h2>
                    {error && <p className="error">{error}</p>}
                    <p>
                        <input type="text" onChange={(e)=>setUser({...user,name:e.target.value})} placeholder="Enter First Name"/>
                    </p>
                    <p>
                        <input type="text" onChange={(e)=>setUser({name:user.name+" "+e.target.value})} placeholder="Enter Last Name"/>
                    </p>
                    <p>
                        <input type="email" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Enter Email Address"/>
                    </p>
                    <p>
                        <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Enter Password" />
                    </p>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
};

export {Register1};

// Uncontrolled Component
// In uncontrolled component, we do not use state to store the values of the input fields.
const Register2 = () => {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const handleSubmit=()=>{
        // console.log(user);
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value
        }
    }
    return(
        <>
            <div className="App-Register-Row">
                <div style={{backgroundColor:"white"}}>
                    <h2>Registeration Form</h2>
                    <p>
                        <input type="text" ref={firstName} placeholder="Enter First Name"/>
                    </p>
                    <p>
                        <input type="text" ref={lastName} placeholder="Enter Last Name"/>
                    </p>
                    <p>
                        <input type="email" ref={email} placeholder="Enter Email Address"/>
                    </p>
                    <p>
                        <input type="password" ref={password} placeholder="Enter Password" />
                    </p>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
};
export {Register2};
