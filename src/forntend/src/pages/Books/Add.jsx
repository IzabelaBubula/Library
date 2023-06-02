import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Add = () => {
    const [book, setBook] = useState({
        b_title: "",
        b_descriprion: "",
        b_quantity: null,
        b_PublicationYear: null,
        b_Price: null,
        a_authorID: null,
        g_genres: ""
    });

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

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/authors")
                setAuthors(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClisk = async e => {
        try {
            await axios.post("http://localhost:8800/booksWithRel", book)
            // navigate("/books")
        }catch(err){
            console.log(err)
        }
    }

    function onChangeGen(){
        const selected = document.getElementById("GenParent").value;
        book.g_genres=selected;
    }

    function onChangeAuth(){
        const selected = document.getElementById("AuthorID").value;
        book.a_authorID=parseInt(selected);
    }

    console.log(book)
    console.log(authors)

    return (
        <div className='form'>
            <h1>Add new Book</h1>
                <input type="text" placeholder='b_title' onChange={handleChange} name="b_title"/>
                <input type="text" placeholder='b_descriprion' onChange={handleChange} name="b_descriprion"/>
                <input type="number" placeholder='b_quantity' onChange={handleChange} name="b_quantity"/>
                <input type="number" placeholder='b_PublicationYear' onChange={handleChange} name="b_PublicationYear"/>
                <select name="GenParent" id="GenParent" >
                {genres.map(genre =>(
                        <option value={genre.GenID} key={genre.GenID} onChange={onChangeGen()}>{genre.Name}</option>
                ))}
                </select>
                <select name="Author" id="AuthorID" >
                {authors.map(author =>(
                        <option value={author.AuthID} key={author.GenID} onChange={onChangeAuth()}>{author.FirstName} {author.SecondName} {author.LastName}</option>
                ))}
                </select>
                <input type="number" placeholder='b_Price' onChange={handleChange} name="b_Price"/>

                <button onClick={handleClisk}>Add</button>
                <button style={{textDecoration: "none"}}><Link to="/books" className='home'>Books</Link></button>
                <button style={{textDecoration: "none"}}><Link to="/" className='home'>Home</Link></button>
                
        </div>
    )
}

export default Add