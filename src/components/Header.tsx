import React from 'react';
import {NavLink} from 'react-router-dom';
import {Profil} from "./Profil";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../types/common";
import {changeLanguage} from "../stores/app/appActions";

const Header = () => {
  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch();
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
      <button onClick={() => dispatch(changeLanguage('en'))}>English</button>
      <button onClick={() => dispatch(changeLanguage('ru'))}>Русский</button>
    </div>
  );
}
export default Header