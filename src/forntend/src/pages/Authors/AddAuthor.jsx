import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddAuthor = () => {
    const [author, setAuthor] = useState({
        FirstName: "",
        SecondName: "",
        LastName: "",
        NickName: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setAuthor((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClisk = async e => {
        try {
            await axios.post("http://localhost:8800/authors", author)
            navigate("/authors")
        }catch(err){
            console.log(err)
        }
    }

    console.log(author)

    return (
        <div className='form'>
            <h1>Add new Book</h1>
                <input type="text" placeholder='First Name' onChange={handleChange} name="FirstName"/>
                <input type="text" placeholder='Second Name' onChange={handleChange} name="SecondName"/>
                <input type="text" placeholder='Last Name' onChange={handleChange} name="LastName"/>
                <input type="text" placeholder='Nick Name' onChange={handleChange} name="NickName"/>

                <button onClick={handleClisk}>Add</button>
                <button style={{textDecoration: "none"}}><Link to="/authors" className='home'>Authors</Link></button>
                <button style={{textDecoration: "none"}}><Link to="/" className='home'>Home</Link></button>
        </div>
    )
}

export default AddAuthor