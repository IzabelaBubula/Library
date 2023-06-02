import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UpdateAuthor = () => {

    const location = useLocation()
    const authorID = location.pathname.split("/")[2]

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const fetchAllAuthors = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/authors/" + authorID)
                setAuthors(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fetchAllAuthors()
    }, [])


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
            await axios.put("http://localhost:8800/authors/" + authorID, author)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='form'>
            <h1>Update the Author</h1>
            {authors.map(author =>(
                <div key={author.AuthID}> 
                    <input type="text" placeholder={author.FirstName} onChange={handleChange} name="FirstName"/>
                    <input type="text" placeholder={author.SecondName} onChange={handleChange} name="SecondName"/>
                    <input type="text" placeholder={author.LastName} onChange={handleChange} name="LastName"/>
                    <input type="text" placeholder={author.NickName} onChange={handleChange} name="NickName"/>

                    <button onClick={handleClisk}>Update</button>
                    <button style={{textDecoration: "none"}}><Link to="/authors" className='UpdateButton'>Authors</Link></button>
                    <button style={{textDecoration: "none"}}><Link to="/" className='UpdateButton'>Home</Link></button>
            </div>
            ))}
        </div>
    )
}

export default UpdateAuthor