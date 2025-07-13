import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass1,setShowPass1] = useState(false);
    const [showPass2,setShowPass2] = useState(false);
    const [message,setMessage] = useState("");
    const navigate=useNavigate();
    const API_URL = import.meta.env.VITE_BACKEND_URL;
    const handleSubmit = async (e) => {
        const url = `${API_URL}/api/users/login`;
        e.preventDefault();
        const user = {
            email:email,
            password:password
        };
        console.log(user);
        try{
            const result= await axios.post(url,user);
            setMessage("Login Successfull!");
            navigate("/home");
        }catch(err){
            setMessage("Login Failed, Wrong Credentials");
        }
        
    }

    const handleReset = (e) => {
        setEmail("");
        setPassword("");
        setShowPass1(false);
        setShowPass2(false);
    }
    const togglePassword = (field) =>{
        if(field==='showPass1'){setShowPass1(!showPass1);}
        else{setShowPass2(!showPass2);}
    }
    return (
        <>  
            <h1>Login</h1>
            <div className='register-container'>
                <fieldset>
                    <legend>Login Form</legend>
                    <form action="POST" onSubmit={handleSubmit}>
                        {message && <p>{message}</p>}
                        {/* <p title='Username'>
                            <label htmlFor="username">Username:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <input type="text" name="username" id="username" value={username} placeholder='Your Username' autoFocus required onChange={(e)=>setUsername(e.target.value)} />
                        </p>
                        <p title='Age'>
                            <label htmlFor="age">Age:</label>
                            <input type="number" name="age" id="age" value={age} placeholder='Your Age' onChange={e=>setAge(e.target.value)} />
                        </p> */}
                        <p title='Email'>
                            <label htmlFor="email">Email:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <input type="email" name="email" id="email" value={email} placeholder='Your Email' autoFocus required onChange={e=>setEmail(e.target.value)} />
                        </p>
                        <p title='Password'>
                            <label htmlFor="password">Password:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <span className="input-wrapper">
                                <input type={showPass1?"text":"password"} name="password" id="password" value={password} placeholder='Your Password' required onChange={e=>setPassword(e.target.value)} />
                                <span className="eye" id="eye1" onClick={()=>togglePassword('showPass1')}>{showPass1?<FaEyeSlash/>:<FaEye/>}</span>
                            </span>
                        </p>
                        {/* <p title='Confrim Password'>
                            <label htmlFor="cpassword">Confrim Password:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <div className="input-wrapper">
                                <input type={showPass2?"text":"password"} name="cpassword" id="cpassword" value={cpassword} placeholder='Confrim Password' required  onChange={e=>setCpassword(e.target.value)}/>
                                <span className="eye" id="eye2" onClick={()=>togglePassword('showPass2')}>{showPass2?<FaEyeSlash/>:<FaEye/>}</span>
                            </div>
                        </p>
                        <p title='Upload Profile Pic'>
                            <label htmlFor="profile" className="file-wrapper">Profile:</label>
                            <input type="file" name="profile" id="profile" placeholder='Profile' hidden onChange={e=>setProfile(e.target.files[0])}/>
                            {profile ? ( 
                                <small style={{ color: "green" }}>Selected: {profile.name}</small>
                            ):(
                                <small style={{ color: "gray" }}>No file selected</small>
                            )}
                        </p> */}
                        <p className='btn'>
                            <button type="reset" onClick={handleReset} id="reset">Reset</button>
                            <button type="submit" id="submit">Submit</button>
                        </p>

                        <p style={{ textAlign: "center" }}>or</p>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                                const decoded = jwtDecode(credentialResponse.credential);
                                console.log(decoded);
                                axios.post(`${API_URL}/api/users/google-login`, {
                                    token: credentialResponse.credential,
                                }).then(res => {
                                    setMessage("Google Login Successful!");
                                    navigate("/home");
                                }).catch(err => {
                                    setMessage("Google Login Failed");
                                });
                            }}
                            onError={() => {
                                setMessage("Google Login Failed");
                            }}
                            auto_select={true} // to auto login google loggedin users
                        />
                        </div>

                        <p className="foot">Don't have an account?<Link to="/register">Sign&nbsp;Up</Link></p>
                    </form>
                </fieldset>
            </div>
            <style jsx="true">{`
                .register-container{
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                fieldset{
                    border-radius:20px;
                    padding:2rem;
                    margin: 2rem;
                    background-color:rgba(208, 245, 241, 0.82);
                    width:30vw;
                    max-width: 700px;
                }
                fieldset:hover,fieldset:focus{
                    margin-top:1.8rem;
                    margin-bottom:2.2rem;
                    transition: all 0.2s;
                    box-shadow: 10px 14px 8px rgba(0, 0, 0, 0.5);
                }
                legend{
                    font-weight:bold;
                    font-style:italic;
                    color:gray;
                }
                form>p, .input-wrapper{
                    display:flex;
                    flex-direction:column;
                }
                .input-wrapper{
                    /*position: relative;*/
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .input-wrapper>input {
                    width: 89%;
                    padding-right: 2.5rem; /* space for eye */
                }
                label{
                    font-style:italic;
                    color:gray;
                }
                button:hover, button:focus, button:active{
                    transition: all 0.2s;
                    margin-top: 0.4rem ;
                    margin-bottom: 0.8rem;
                    box-shadow: 10px 14px 5px rgba(0, 0, 0, 0.2);
                }
                input:hover, input:focus, input:active{
                    box-shadow: 10px 14px 5px rgba(0, 0, 0, 0.2);
                    background-color: #fff;
                    transition: all 0.2s;
                    margin-top: 0.4rem ;
                    margin-bottom: 0.8rem;
                }
                input{
                    border: none;
                    background-color:rgba(119, 119, 119, 0.54);
                    border-radius: 10rem;
                    padding: 0.5rem;
                    margin: 0.6rem 0;
                    min-width: fit-content;
                    outline: none;
                }
                .file-wrapper{
                    cursor:pointer;
                }
                button{
                    background-color:rgb(161, 161, 161);
                    color: white;
                    border: none;
                    border-radius: 20px;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    font-weight: bold;
                    margin: 0.8rem;
                    width: fit-content;
                }
                .btn{
                    display:flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items:center;
                }
                #submit:hover{
                    background-image:linear-gradient(rgb(0, 128, 0),rgb(0, 255, 0));
                }
                #reset:hover{
                    background-image:linear-gradient(rgb(5, 14, 113),rgb(53, 117, 220));
                }
                .eye{
                    position: relative;
                    /*bottom: 1.5rem;*/
                    bottom: 1.58rem;
                    left: 44.5%;
                    /*left: 18rem;*/
                    transform: translateY(-50%);
                    cursor: pointer;
                    color: gray;
                    padding: 0.4rem 0.5rem 0.2rem 0.5rem;
                    width:fit-content;
                }
                .eye:hover{
                    color: black;
                    background-color: rgba(213, 222, 235, 0.87);
                    border-radius: 100rem;
                    width: fit-content;
                }
            `}</style>
        </>
    );
};

export default LoginForm;