import React from 'react';
import {Link} from "react-router-dom";
import {addMyFilm, removeMyFilm} from "../../stores/filmsActions";
import {useDispatch, useSelector} from "react-redux";
import {TFilm, RootState} from "../../types/common";

interface IProps {
  film: TFilm
}
function Film(props: IProps) {
  const {film} = props;
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms)
  const dispatch = useDispatch();

  const set = myFilms.find(myFilm => myFilm.id === film.id)
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!set) {
      dispatch(addMyFilm(film));
      console.log(film)
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
      <button className="button">
        <Link to={{pathname:`/films/${film.id}`, state: 'films'}}>
          подробнее
        </Link>
      </button>
      {set ? del : add}
    </div>
  )
}

export default Film