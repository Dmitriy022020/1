import React from 'react';
import {Link} from 'react-router-dom';
import {Profil} from "./Profil";
import {useSelector} from "react-redux";
import {RootState} from "../types/common";

const Header = () => {
  const user = useSelector((state: RootState) => state.users.user)
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <Link className='li' to='/'>Home</Link>
        </li>
        <li>
          <Link className='li' to='/films'>Films</Link>
        </li>
        <li>
          <Link className='li' to='/myFilms'>My films</Link>
        </li>
        <li>
          <Link className='li' to='/about'>About</Link>
        </li>
      </ul>
      {user ? <Profil/> : null}
    </div>
  );
}
export default Header