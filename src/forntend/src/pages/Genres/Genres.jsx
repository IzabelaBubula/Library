import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./../../App.css"

const Genres = () => {
    const [genres, setGenres] = useState([])

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

    console.log(genres)

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/genres/"+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }

    return (
        <div class="bookPage">
            <h1>Genres</h1>
            <div className="books">
                {genres.map(genre =>(
                        <table className="book" key={genre.GenID}>
                            <tr className="bookPart">
                                <th>{genre.GenParentID}</th>
                                <th>{genre.Name}</th>
                                <th>
                                    <button className="delete" onClick={()=>handleDelete(genre.GenID)}>Delete</button>
                                </th>
                                <th>
                                    <button className="update"><Link to={`/updateGenres/${genre.GenID}`} className='updateLink'>Update</Link></button>
                                </th>
                            </tr>
                        </table>
                ))}
            </div>
            <button class="addBookButton"><Link className='addBook' to="/addGenres">Add new genre</Link></button>
            <button class="addBookButton"><Link className='addBook' to="/">Menu</Link></button>
        </div>

    )
}

export default Genres