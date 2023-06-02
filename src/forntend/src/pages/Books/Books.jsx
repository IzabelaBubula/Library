import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../../App.css"

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/booksFullInfo")
                setBooks(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    console.log(books)

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/books/"+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div class="bookPage">
            <h1>Books</h1>
            
            <div className="books">
                <table className="book">
                    <tr className="bookPartTitle">
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Publication Year</th>
                                    <th>Price</th>
                                    <th>Authors</th>
                                    <th>Genres</th>
                                    <th></th>
                                    <th></th>
                    </tr>
                    {books.map(book =>(
                                <tr className="bookPart" key={book.BookID}>
                                    <th>{book.Title}</th>
                                    <th>{book.Description}</th>
                                    <th>{book.Quantity}</th>
                                    <th>{book.PublicationYear}</th>
                                    <th>{book.Price}</th>
                                    <th>{book.Authors}</th>
                                    <th>{book.Genres}</th>
                                    <th>
                                        <button className="delete" onClick={()=>handleDelete(book.BookID)}>Delete</button>
                                    </th>
                                    <th>
                                        <button className="update"><Link to={`/updateBook/${book.BookID}`} className='updateLink'>Update</Link></button>
                                    </th>
                                </tr>
                            
                    ))}
                </table>
            </div>
            <button class="addBookButton"><Link className='addBook' to="/addBook">Add new book</Link></button>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default Books