import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BorrowBook = () => {
    const [book, setBook] = useState({
        BorrowerID: null,
        BookID: null,
        BorrowNumberOfBooks: null,
        BorrowNumberOfDays: null
    });

   
    const [borrowers, setBorrowers] = useState([])

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/users")
                setBorrowers(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
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
            console.log(book.BorrowDate)
            await axios.put("http://localhost:8800/addBorrowedBooks", book)
            // navigate("/books")
        }catch(err){
            console.log(err)
        }
    }

    function onChangeBook(){

        const selected = document.getElementById("BorrowerID").value;
        book.BorrowerID=parseInt(selected);
    }

    function onChangeBorr(){
        const selected = document.getElementById("BookID").value;
        book.BookID=parseInt(selected);
    }

    return (
        <div className='form'>
            <h1>Borrow Book</h1>
                <select name="BorrowerID" id="BorrowerID" >
                {borrowers.map(genre =>(
                        <option value={genre.BorID} key={genre.BorID} onChange={onChangeBook()}>{genre.FirstName} {genre.LastName}</option>
                ))}
                </select>
                <select name="BookID" id="BookID">
                {books.map(author =>(
                        <option value={author.BooID} key={author.BooID} onChange={onChangeBorr()}>{author.Title} ({author.PublicationDate})</option>
                ))}
                </select>
                <input type="number" placeholder='BorrowNumberOfBooks' onChange={handleChange} name="BorrowNumberOfBooks"/>
                <input type="number" placeholder='BorrowNumberOfDays' onChange={handleChange} name="BorrowNumberOfDays"/>

                <button onClick={handleClisk}>Borrow Book</button>
                <button style={{textDecoration: "none"}}><Link to="/borrowedBooks" className='home'>Borrowed</Link></button>
                <button style={{textDecoration: "none"}}><Link to="/" className='home'>Home</Link></button>
                
        </div>
    )
}

export default BorrowBook