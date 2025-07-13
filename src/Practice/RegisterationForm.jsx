import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterationForm = () => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [showPass1,setShowPass1] = useState(false);
    const [showPass2,setShowPass2] = useState(false);
    const [profile, setProfile] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password || !cpassword) {
            alert("Please fill all the required fields!");
            return;
        }
        if(validateDetails(username, age, email, password, cpassword, profile)) {
            alert("Registration Successfull!");
            setTimeout(()=>{
                useNavigate("/login"); // Assuming you have a useNavigate hook from react-router-dom
            },1000);
        }
    }
    const validateDetails=(username, age, email,password,cpassword,profile)=>{
        if(username.length < 2 || username.length > 20) {
            alert("Username must be between 2 and 20 characters long!");
            return false;
        }
        if(!username.match(/^[a-zA-Z0-9_]+$/)) {
            alert("Username can only contain letters, numbers and _ !");
            return false;
        }
        if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) === null){
            alert("Please enter a valid email address!");
            return false;
        }
        if(age && (age < 0 || age > 120)) {
            alert("Please enter a valid age!");
            return false;
        }
        if(password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return false;
        }
        if(!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[@$!%#*?&]/)) {
            alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character!");
            return false;
        }
        if (password !== cpassword) {
            alert("Passwords do not match!");
            return false;
        }
        if(profile && !profile.type.startsWith("image/")) {
            alert("Please upload a valid image file!");
            return false;
        }
        return true;
    }
    const handleReset = (e) => {
        setUsername("");
        setAge("");
        setEmail("");
        setPassword("");
        setCpassword("");
        setShowPass1(false);
        setShowPass2(false);
        setProfile(null);
    }
    const togglePassword = (field) =>{
        if(field==='showPass1'){setShowPass1(!showPass1);}
        else{setShowPass2(!showPass2);}
    }
    return (
        <>  
            <h1>Register</h1>
            <div className='register-container'>
                <fieldset>
                    <legend>Registeration Form</legend>
                    <form action="POST" onSubmit={handleSubmit}>
                        <p title='Username'>
                            <label htmlFor="username">Username:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <input type="text" name="username" id="username" value={username} placeholder='Your Username' autoFocus required onChange={(e)=>setUsername(e.target.value)} />
                        </p>
                        <p title='Age'>
                            <label htmlFor="age">Age:</label>
                            <input type="number" name="age" id="age" value={age} placeholder='Your Age' onChange={e=>setAge(e.target.value)} />
                        </p>
                        <p title='Email'>
                            <label htmlFor="email">Email:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <input type="email" name="email" id="email" value={email} placeholder='Your Email' required onChange={e=>setEmail(e.target.value)} />
                        </p>
                        <p title='Password'>
                            <label htmlFor="password">Password:<span style={{color:"red"}}>&nbsp;*</span></label>
                            <div className="input-wrapper">
                                <input type={showPass1?"text":"password"} name="password" id="password" value={password} placeholder='Your Password' required onChange={e=>setPassword(e.target.value)} />
                                <span className="eye" id="eye1" onClick={()=>togglePassword('showPass1')}>{showPass1?<FaEyeSlash/>:<FaEye/>}</span>
                            </div>
                        </p>
                        <p title='Confrim Password'>
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
                        </p>
                        <p className='btn'>
                            <button type="reset" onClick={handleReset} id="reset">Reset</button>
                            <button type="submit" id="submit">Submit</button>
                        </p>
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
                    width: 93%;
                    padding-right: 2.5rem; /* space for eye */
                }
                label{
                    font-style:italic;
                    color:gray;
                }
                input:hover, input:focus, input:active, button:hover, button:focus, button:active{
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
                    left: 46.5%;
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

export default RegisterationForm;