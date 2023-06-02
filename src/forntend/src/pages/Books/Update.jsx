import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {

    const [authors, setAuthors] = useState([]) //getAuthors

    const [genres, setGenres] = useState([]) //getGenres

    const [books, setBooks] = useState([]) //getBooks

    const [AaB, setAaB] = useState([]) //getAuthorsAndBooks

    const [AaG, setAaG] = useState([]) //getAuthorsAndBooks

    const [AuthBoo, setAuthBoo] = useState({ //getAuthorsAndBooks
        BooID: null,
        AuthId: null
    });

    const [book, setBook] = useState({ //Update Book
        Title: "",
        Description: "",
        Quantity: null,
        PublicationYear: null,
        Price: null
    });
     
    const location = useLocation()
    const bookId = location.pathname.split("/")[2]
  
/* ----------------------------------------------------------- BEGIN FUNCTIONS ---------------------------------------------------------------*/

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/booksFullInfo/" + bookId)
                setBooks(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    useEffect(() => {
        const fethAllGenres = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/genres")
                setGenres(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllGenres()
    }, [])

    useEffect(() => {
        const fethAllAthors = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/authors")
                setAuthors(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllAthors()
    }, [])

// -------------------------------------------------------------------- USAGE FUNCTIONS ------------------------------------------------------------------------

    const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClisk = async e => {
        try {
            await axios.put("http://localhost:8800/books/" + bookId, book)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    const hendleDelete = async e => { 
        const selected = document.getElementById("AuthorID").value;

        try{
            const res = await axios.get("http://localhost:8800/getMTM_BAID/" + bookId)
            setAaB(res.data);
            mapResponce(selected)
        } catch (err){
            console.log(err)
        }
    }

    function mapResponce(selected){
        AaB.map(async ab => {
            console.log(ab.MTM_BAID)
            if(selected == ab.AuthID){
                try{
                    const res = await axios.delete("http://localhost:8800/deleteLinkBookAuthor/" + ab.MTM_BAID)
                    window.location.reload()
                } catch (err){
                    console.log(err)
                }
            }
        })
    }

    const hendleDeleteGenre = async e => { 
        const selected = document.getElementById("GenID").value;
        console.log(selected)

        try{
            const res = await axios.get("http://localhost:8800/getMTM_BGID/" + bookId)
            setAaG(res.data);
            console.log(AaG)
            mapResponceAG(selected)
        } catch (err){
            console.log(err)
        }
    }

    function mapResponceAG(selected){
        console.log("break2")
        AaG.map(async ag => {
            console.log("break3")
            console.log(ag.MTM_BGID, parseInt(selected), ag.GenID)
            if(parseInt(selected) === ag.GenID){
                console.log("xd")
                try{
                    const res = await axios.delete("http://localhost:8800/deleteLinkBookGenre/" + ag.MTM_BGID)
                    window.location.reload()
                } catch (err){
                    console.log(err)
                }
            }
        })
    }


    const handelAdd = async e => { 
        const selected = document.getElementById("AddAuthorID").value;
        console.log(selected);
        try{
            const res = await axios.put("http://localhost:8800/addAuthorToBook", {bookId, selected})
            window.location.reload()
        } catch (err){
            console.log(err)
        }
    }


    const handelAddGenre = async e => { 
        const selected = document.getElementById("AddGenID").value;
        console.log(selected);
        try{
            const res = await axios.put("http://localhost:8800/addGenresToBook", {bookId, selected})
            window.location.reload()
        } catch (err){
            console.log(err)
        }
    }


    

    console.log(genres)

    return (
        <div className='forme'>
            <div>
            <h1>Update the Book</h1>
            {books.map(book =>(
                <div key={book.AuthorID}> 
                    <input type="text" placeholder={book.Title} onChange={handleChange} name="Title"/>
                    <input type="text" placeholder={book.Description} onChange={handleChange} name="Description"/>
                    <input type="number" placeholder={book.Quantity} onChange={handleChange} name="Quantity"/>
                    <input type="number" placeholder={book.PublicationYear} onChange={handleChange} name="PublicationYear"/>
                    <input type="number" placeholder={book.Price} onChange={handleChange} name="Price"/>

                    <button onClick={handleClisk}>Update</button>
                    <button style={{textDecoration: "none"}}><Link to="/books" className='UpdateButton'>Books</Link></button>
                    <button style={{textDecoration: "none"}}><Link to="/" className='UpdateButton'>Home</Link></button>
            </div>
            ))}
            </div>
            <div className='form'>
                <div>
                <h2>Delete Author</h2>
                    <select name="AuthorID" id="AuthorID">
                        {books.map(book =>(
                                <option value={book.AuthorID} key={book.AuthorID}>{book.AuthorFirstName} {book.AuthorSecondName} {book.AuthorLastName}</option>
                        ))}
                    </select>
                    <button onClick={hendleDelete}>delete</button>
                    <br />
                    <h2>Delete Genre</h2>
                    <select name="GenID" id="GenID">
                    {books.map(book =>(
                                <option value={book.GenreID} key={book.GenreID}>{book.genreName}</option>
                        ))}
                    </select>
                    <button onClick={hendleDeleteGenre}>delete</button>
                </div>
                <div style={{marginLeft: "130px"}}>
                <h2>Add Author</h2>
                    <select name="AddAuthorID" id="AddAuthorID">
                        {authors.map(author =>(
                                <option value={author.AuthID} key={author.AuthID}>{author.FirstName} {author.SecondName} {author.LastName}</option>
                        ))}
                    </select>
                    <button onClick={handelAdd}>Add</button>
                    <h2>Add Genre</h2>
                    <select name="AddGenID" id="AddGenID">
                        {genres.map(genre =>(
                                <option value={genre.GenID} key={genre.GenID}>{genre.Name}</option>
                        ))}
                    </select>
                    <button onClick={handelAddGenre}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Update