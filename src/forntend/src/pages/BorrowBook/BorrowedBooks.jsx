import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../../App.css"

const BorrowedBooks = () => {
    const [borrowed, setBorrowed] = useState([])

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/borrowedBooks")
                setBorrowed(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    console.log(borrowed)

    const handleDelete = async (id)=>{
        try {
            await axios.delete("http://localhost:8800/deleteBorrowedBooks/" + parseInt(id))
            console.log(parseInt(id))
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div class="bookPage">
            <h1>Borrowed</h1>
            
            <div className="books">
                <table className="book">
                    <tr className="bookPartTitle">
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Publication Year</th>
                                    <th>Price</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Borrowed Date</th>
                                    <th></th>
                    </tr>
                    {borrowed.map(book =>(
                                <tr className="bookPart" key={book.MTM_BBID}>
                                    <th>{book.Title}</th>
                                    <th>{book.Description}</th>
                                    <th>{book.BorrowNumber}</th>
                                    <th>{book.PublicationYear}</th>
                                    <th>{book.Price}</th>
                                    <th>{book.FirstName}</th>
                                    <th>{book.LastName}</th>
                                    <th>{book.BorrowDate}</th>
                                    <th>
                                        <button className="delete" onClick={()=>handleDelete(book.MTM_BBID)}>Return</button>
                                    </th>
                                </tr>
                            
                    ))}
                </table>
            </div>
            <button class="addBookButton"><Link className='addBook' to="/borrowBook">Borow Book</Link></button>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default BorrowedBooks