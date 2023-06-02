import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../../App.css"

const Authors = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const fethAllAuthors = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/authors")
                setAuthors(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fethAllAuthors()
    }, [])

    console.log(authors)

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/authors/"+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div class="bookPage">
            <h1>Authors</h1>
            <div className="books">
                {authors.map(author =>(
                        <table className="book" key={author.AuthID}>
                            <tr className="bookPart">
                                <th>{author.FirstName}</th>
                                <th>{author.SecondName}</th>
                                <th>{author.LastName}</th>
                                <th>{author.NickName}</th>
                                <th>
                                    <button className="delete" onClick={()=>handleDelete(author.AuthID)}>Delete</button>
                                </th>
                                <th>
                                    <button className="update"><Link to={`/updateAuthor/${author.AuthID}`} className='updateLink'>Update</Link></button>
                                </th>
                            </tr>
                        </table>
                ))}
            </div>
            <button class="addBookButton"><Link className='addBook' to="/addAuthor">Add new author</Link></button>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default Authors