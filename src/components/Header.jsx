import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <ul className="nav">
            <li>
                <Link className='li' to='/'>Home</Link>
            </li>
            <li>
                <Link className='li' to='/films'>Films</Link>
            </li>
            <li>
                <Link className='li' to='/books'>Books</Link>
            </li>
            <li>
                <Link className='li' to='/about'>About</Link>
            </li>
        </ul>
    </div>
);
export default Header