import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddBorrower = () => {
    const [borrower, setBorrower] = useState({
        FirstName: "",
        SecondName: "",
        LastName: "",
        email: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBorrower((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClisk = async e => {
        try {
            await axios.post("http://localhost:8800/borrowers", borrower)
            navigate("/users")
        }catch(err){
            console.log(err)
        }
    }

    console.log(borrower)

    return (
        <div className='form'>
            <h1>Add new Borrower</h1>
                <input type="text" placeholder='First Name' onChange={handleChange} name="FirstName"/>
                <input type="text" placeholder='Second Name' onChange={handleChange} name="SecondName"/>
                <input type="text" placeholder='Last Name' onChange={handleChange} name="LastName"/>
                <input type="text" placeholder='email' onChange={handleChange} name="email"/>

                <button onClick={handleClisk}>Add</button>
                <button style={{textDecoration: "none"}}><Link to="/users" className='home'>Borrowers</Link></button>
                <button style={{textDecoration: "none"}}><Link to="/" className='home'>Home</Link></button>
        </div>
    )
}

export default AddBorrower