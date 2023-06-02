import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const UpdateBorrower = () => {

    const location = useLocation()
    const borrowerID = location.pathname.split("/")[2]

    const [borrowers, setBorrowers] = useState([])

    useEffect(() => {
        const fetchAllBorrowers = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/borrowers/" + borrowerID)
                setBorrowers(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fetchAllBorrowers()
    }, [])


    const [borrower, setBorrower] = useState({
        FirstName: "",
        SecondName: "",
        LastName: "",
        email: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setBorrower((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClisk = async e => {
        try {
            await axios.put("http://localhost:8800/borrowers/" + borrowerID, borrower)
            console.log(borrower)
            console.log(borrowerID)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='form'>
            <h1>Update the Borrower</h1>
            {borrowers.map(borrower =>(
                <div key={borrower.AuthID}> 
                    <input type="text" placeholder={borrower.FirstName} onChange={handleChange} name="FirstName"/>
                    <input type="text" placeholder={borrower.SecondName} onChange={handleChange} name="SecondName"/>
                    <input type="text" placeholder={borrower.LastName} onChange={handleChange} name="LastName"/>
                    <input type="text" placeholder={borrower.email} onChange={handleChange} name="email"/>

                    <button onClick={handleClisk}>Update</button>
                    <button style={{textDecoration: "none"}}><Link to="/users" className='UpdateButton'>Borrowers</Link></button>
                    <button style={{textDecoration: "none"}}><Link to="/" className='UpdateButton'>Home</Link></button>
            </div>
            ))}
        </div>
    )
}

export default UpdateBorrower