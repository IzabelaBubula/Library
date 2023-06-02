import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../App.css"

const Payments = () => {
    const [payments, setPayments] = useState([])
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

    useEffect(() => {
        const fethAllPayments = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/payments")
                setPayments(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllPayments()
    }, [])

    console.log(payments)

    return (
        <div class="bookPage">
            <h1>Payment Logs</h1>
            <div className="books">
            <table className="book" >
            <tr className="bookPartTitle">
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Last Name</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Publication Year</th>
                    <th>Borrow Date</th>
                    <th>Borrow Number</th>
                    <th>Number of Days</th>
                    <th>Cash Payed</th>
            </tr>
            {payments.map(book =>(
                <tr className="bookPart" key={book.L_BBID}>
                    <th>{book.FirstName}</th>
                    <th>{book.SecondName}</th>
                    <th>{book.LastName}</th>
                    <th>{book.title}</th>
                    <th>{book.description}</th>
                    <th>{book.publicationYear}</th>
                    <th>{book.BorrowDate}</th>
                    <th>{book.BorrowNumber}</th>
                    <th>{book.NumberOfDays}</th>
                    <th>{book.CashPayed}</th>
                </tr>
            ))}
                </table>
            </div>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default Payments