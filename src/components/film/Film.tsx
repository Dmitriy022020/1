import React from 'react';
import {Link} from "react-router-dom";
import {addMyFilm, removeMyFilm} from "../../stores/actions";
import {useDispatch, useSelector} from "react-redux";

function Film(props) {
  const {film} = props;
  const myFilms = useSelector(state => state.allFilms.myFilms)
  const dispatch = useDispatch();

  const set = myFilms.find(myFilm => myFilm.id === film.id)
  const clickHandler = (event: React.ChangeEvent) => {
    event.preventDefault();
    if (!set) {
      dispatch(addMyFilm(film));
      console.log(film)
    } else {
    }
  }
  const del =
    <button
      className="button red"
      onClick={() => dispatch(removeMyFilm(film.id))}
    >
      Удалить из My films
    </button>
  const add =
    <button
      className="button green"
      onClick={clickHandler}
    >
      Добавить в My films
    </button>
  return (
    <div>
      <h3>{film.title}</h3>
      <h5>{film.release_date}</h5>
      <button className="button"><Link to={`/films/${film.id}`}>подробнее</Link></button>
      {set ? del : add}
    </div>
  )
}

export default Film