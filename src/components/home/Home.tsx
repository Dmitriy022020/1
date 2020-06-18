import React, {useEffect} from 'react';
import Modal from './Modal';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/common";
import {selectFirstFilm, selectOldFilm, selectPopularity, selectRatingFilm} from "../../stores/selectors";
import {loadMyFilms} from "../../stores/filmsActions";

function Home() {
  const user = useSelector((state: RootState) => state.users.user)
  const firstFilm = useSelector(selectFirstFilm)
  const ratingFilm = useSelector(selectRatingFilm)
  const oldFilm = useSelector(selectOldFilm)
  const popularityFilm = useSelector(selectPopularity)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadMyFilms())
  }, [dispatch])

  const signup =
    <div className='login'>
      <h3>Авторизуйтесь на сайте</h3>
      <Modal />
    </div>
/*
  const elem =
    <div className='login'>
      <h3>{user}</h3>
      <button className="button" onClick={() => dispatch(exitProfil())}>Выйти</button>
    </div>
*/
  const filmInfo = (firstFilm) ?
    <div>
      <h4>
        <i>Первый добавленный фильм: </i>
        {firstFilm.title}
      </h4>
      <h4>
        <i>Cамый рентинговый фильм: </i>
        {ratingFilm.title} ({ratingFilm.vote_average})
      </h4>
      <h4>
        <i>Cамый старый фильм: </i>
        {oldFilm.title} ({oldFilm.release_date.toString().slice(0,4)} года)
      </h4>
      <h4>
        <i>Cамый популярный фильм: </i>
        {popularityFilm.title} ({popularityFilm.popularity})
      </h4>
    </div> : null
  return (
    <div className="container">
      <h2>Главная</h2>
      {!user ? signup : null}
      {filmInfo}
    </div>
  )
}
export default Home