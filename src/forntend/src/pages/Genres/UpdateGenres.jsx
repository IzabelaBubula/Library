import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UpdateGenres = () => {

    const location = useLocation()
    const genID = location.pathname.split("/")[2]

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchAllGenres = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/genres/" + genID)
                setGenres(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fetchAllGenres()
    }, [])


    const [genre, setGenre] = useState({
        GenParentID: null,
        Name: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setGenre((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClisk = async e => {
        try {
            await axios.put("http://localhost:8800/genres/" + genID, genre)
            console.log(genre)
            console.log(genID)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='form'>
            <div><h1>Update Genres</h1></div>
            
            {genres.map(genre =>(
                <div key={genre.GenID}> 
                    <input type="text" placeholder={genre.GenParentID} onChange={handleChange} name="GenParentID"/>
                    <input type="text" placeholder={genre.Name} onChange={handleChange} name="Name"/>

                    <button onClick={handleClisk}>Update</button>
                    <button style={{textDecoration: "none"}}><Link to="/genres" className='UpdateButton'>Genres</Link></button>
                    <button style={{textDecoration: "none"}}><Link to="/" className='UpdateButton'>Home</Link></button>
            </div>
            ))}
        </div>
    )
}

export default UpdateGenres