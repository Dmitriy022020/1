import React from 'react';
import {NavLink} from 'react-router-dom';
import {Profil} from "./Profil";
import {useSelector} from "react-redux";
import {RootState} from "../types/common";

const Header = () => {
  const user = useSelector((state: RootState) => state.users.user)
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <NavLink className='li' activeClassName='li-active' to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink className='li' activeClassName='li-active' to='/films'>Films</NavLink>
        </li>
        <li>
          <NavLink className='li' activeClassName='li-active' to='/myFilms'>My films</NavLink>
        </li>
        <li>
          <NavLink className='li' activeClassName='li-active' to='/about'>About</NavLink>
        </li>
      </ul>
      {user ? <Profil/> : null}
    </div>
  );
}
export default Header