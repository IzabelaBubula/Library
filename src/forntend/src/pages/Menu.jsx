import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <h1>MENU</h1>
            <button className='menuButton'><Link to="/books" className='menuLink'>Books</Link></button>
            <button className='menuButton'><Link to="/authors" className='menuLink'>Autors</Link></button>
            <button className='menuButton'><Link to="/genres" className='menuLink'>Genres</Link></button>
            <button className='menuButton'><Link to="/users" className='menuLink'>Users</Link></button>
            <button className='menuButton'><Link to="/borrowedBooks" className='menuLink'>Borrow Book</Link></button>
            <button className='menuButton'><Link to="/reservations" className='menuLink'>Reserve Book</Link></button>
            <button className='menuButton'><Link to="/payments" className='menuLink'>Show Payments</Link></button>
        </div>
    )
}

export default Menu