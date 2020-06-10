import React from 'react';
import {Link} from "react-router-dom";
import {addMyFilm} from "../../stores/actions";
import {useDispatch} from "react-redux";

function Film(props) {
  const {film} = props
  const dispatch = useDispatch()
  const clickHandler = (event) => {
    event.preventDefault();
    dispatch(addMyFilm(film))
    console.log(film)
  }
  return (
    <div>
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <button className="button"><Link to={`/films/${film.id}`}>подробнее</Link></button>
      <button className="button" onClick={clickHandler}>Добавить в My films</button>
    </div>
  )
}

export default Film