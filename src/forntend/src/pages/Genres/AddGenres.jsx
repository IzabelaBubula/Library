import axios from 'axios';
import React, { useState, useEffect, setSelected } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddGenres = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/genres")
                setGenres(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    console.log(genres)


    const [genre, setGenre] = useState({
        GenParentID: null,
        Name: ''
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setGenre((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    function onChange(){
        const selected = document.getElementById("GenParent").value;
        console.log(selected)
        genre.GenParentID=parseInt(selected);
    }

    const handleClisk = async e => {
        try {
            await axios.post("http://localhost:8800/genres", genre)
            navigate("/genres")
        }catch(err){
            console.log(err)
        }
    }

    console.log(genre)

    return (
        <div className='form'>
            <h1>Add Genres</h1>
                
                {/* <input type="text" placeholder='Name' onChange={handleChange} name="Name"/> */}
                
                <select name="GenParent" id="GenParent" >
                {genres.map(genre =>(
                        <option value={genre.GenID} key={genre.GenID} onChange={onChange()}>{genre.Name}</option>
                ))}
                </select>
                <input type="text" placeholder='Name' onSelect={handleChange} name="Name"/>

                <button onClick={handleClisk}>Add</button>
                <button style={{textDecoration: "none"}}><Link to="/" className='home'>Home</Link></button>
                <button style={{textDecoration: "none"}}><Link to="/genres" className='home'>Genres</Link></button>
        </div>
    )
}

export default AddGenres