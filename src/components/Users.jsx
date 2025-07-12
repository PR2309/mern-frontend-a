import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../CSS/Users.css"
import { useNavigate } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
    const [message,setMessage] = useState("");
    const [details,setDetails] = useState("");
    const API_URL=import.meta.env.VITE_API_URL;
    const navigate=useNavigate();
    const fetchUser = async () => {
        try{
            const url=`${API_URL}/api/users/all-users`;
            setMessage("Loading...");
            const result = await axios.get(url);
            setUsers(result.data);
            (result.data.length===0)?setMessage("No users found"):setMessage("");
        }catch(err){
            console.log(err);
            setMessage("Unable to fetch users");
        }
    };

    const handleUpdate = (id) =>{
        setDetails("Loading User Details...");
        navigate(`/user/${id}`);
    };
    
    const handleDelete = async (id) =>{
        try{
            const url=import.meta.env.VITE_API_URL;
            const result= await axios.delete(`${url}/api/users/delete-user/${id}`);
            setDetails("User Deleted Successfully!!!");
            fetchUser();
        }catch(err){
            console.log(err);
            setDetails("Failed to Delete User");
        }
    };

    useEffect(()=>{
        fetchUser();
    },[]);
    return (
        <>
            <p>Users Page</p>
            {message && <p>{message}</p>}
            {details && <p>{details}</p>}
            {users.length > 0 && (
                <table border="1px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th colSpan="2" className='addUser'><button>Add User</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className='updateUser'><button type="button" onClick={()=>handleUpdate(user._id)}>Update</button></td>
                                <td className='deleteUser'><button type="button" onClick={()=>handleDelete(user._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Users;
