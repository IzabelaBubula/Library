import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../../App.css"

const Reservatios = () => {
    const [reserv, setreserv] = useState([])

    const [book, setBook] = useState({
        BorrowerID: null,
        BookID: null,
        BorrowNumberOfBooks: null,
        BorrowNumberOfDays: null
    });

    useEffect(() => {
        const fethAllBooks = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/reservations")
                setreserv(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllBooks()
    }, [])

    console.log(reserv)

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/deleteReservation/"+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }

    const handleBorrow = async (id)=>{
        try{
            // await axios.delete("http://localhost:8800/deleteReservation/"+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div class="bookPage">
            <h1>Reservations</h1>
            
            <div className="books">
                <table className="book">
                    <tr className="bookPartTitle">
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Publication Date</th>
                                    <th>Borrower First Name</th>
                                    <th>Borrower Last Name</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                    </tr>
                    {reserv.map(book =>(
                                <tr className="bookPart" key={book.BookID}>
                                    <th>{book.Title}</th>
                                    <th>{book.Description}</th>
                                    <th>{book.PublicationYear}</th>
                                    <th>{book.FirstName}</th>
                                    <th>{book.LastName}</th>
                                    <th>
                                        <button className="delete" onClick={()=>handleDelete(book.BRID)}>Delete</button>
                                    </th>
                                    <th>
                                        <button className="update"><Link to={`/updateReservation/${book.BRID}`} className='updateLink'>Update</Link></button>
                                    </th>
                                    <th>
                                        <button className="borrow" onClick={()=>handleBorrow(book.BRID)}>Borrow</button>
                                    </th>
                                </tr>
                            
                    ))}
                </table>
            </div>
            <button class="addBookButton"><Link className='addBook' to="/addReservations">Reserve Book</Link></button>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default Reservatios