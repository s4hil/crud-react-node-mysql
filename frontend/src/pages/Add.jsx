import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Add() {

    const [user, setUser] = useState({
        name:"",
        email:""
    });

    const navigator = useNavigate();

    const handleChange = (e)=>{
        setUser((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log("clicked");
        try {
            const res = await axios.post("http://localhost:8800/users", user);
            navigator("/")
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
    <div className='container mt-5'>
        <div className="row d-flex justify-content-center">
            <div className="col col-sm-12 col-md-8 col-lg-6">
                <h2 className="alert alert-info">Add User</h2>
                <form className="form">
                    <fieldset className="form-group">
                        <input type="text" className="form-control" name='name' onChange={handleChange}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input type="text" className="form-control" name='email' onChange={handleChange}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <button className='btn btn-primary' onClick={handleSubmit}>Add</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
    )
}
