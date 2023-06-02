import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../../App.css"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fethAllAuthors = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/users")
                setUsers(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllAuthors()
    }, [])

    console.log(users)

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/borrowers/"+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div class="bookPage">
            <h1>Borrowers</h1>
            <div className="books">
                {users.map(user =>(
                        <table className="borrower" key={user.BorID}>
                            <tr className="borrowerPart">
                                <th>{user.FirstName}</th>
                                <th>{user.SecondName}</th>
                                <th>{user.LastName}</th>
                                <th style={{width: "231px"}}>{user.email}</th>
                                <th>
                                    <button className="delete" onClick={()=>handleDelete(user.BorID)}>Delete</button>
                                </th>
                                <th>
                                    <button className="update"><Link to={`/updateBorrowers/${user.BorID}`} className='updateLink'>Update</Link></button>
                                </th>
                            </tr>
                        </table>
                ))}
            </div>
            <button class="addBookButton"><Link className='addBook' to="/addBorrower">Add new borrower</Link></button>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default Users