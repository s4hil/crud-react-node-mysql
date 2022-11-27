import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
// import { Link } from "react-router-dom";


const Users = ()=>{
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchAllUsers = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/users")
                setUsers(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllUsers();
    }, []);

    return (
        <div className='container mt-5'>
            <h2 className='alert alert-info text-center'>Users</h2>
            <div className="row d-flex justify-content-center">
                <div className="col col-sm-12 col-md-8 col-lg-10">
                    <table className="table table-striped">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Namee</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger ml-2">Delete</button>    
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
} 

export default Users;


