import React from 'react';
import Modal from './Modal';
import {useDispatch, useSelector} from "react-redux";
import {exitProfil} from "../../stores/actions";
import {RootState} from "../../types/common";

function Home() {
  const user = useSelector((state: RootState) => state.users.user)
  const dispatch = useDispatch()

  const signup =
    <div className='login'>
      <h3>Авторизуйтесь на сайте</h3>
      <Modal />
    </div>
  const elem =
    <div className='login'>
      <h3>{user}</h3>
      <button className="button" onClick={() => dispatch(exitProfil())}>Выйти</button>
    </div>
  return (
    <div className="container">
      <h2>Главная</h2>
      {user ? elem : signup}
    </div>
  )
}
export default Home