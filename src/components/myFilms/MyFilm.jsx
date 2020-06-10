import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeMyFilm} from "../../stores/actions";

function MyFilm(props) {
  const {film} = props
  const dispatch = useDispatch()
  return (
    <div>
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <button className="button"><Link to={`/myFilms/${film.id}`}>подробнее</Link></button>
      <button className="button red" onClick={() => dispatch(removeMyFilm(film.id))}>Удалить из My films</button>
    </div>
  )
}

export default MyFilm