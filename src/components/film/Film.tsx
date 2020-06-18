import React from 'react';
import {Link} from "react-router-dom";
import {addMyFilm, removeMyFilm} from "../../stores/filmsActions";
import {useDispatch, useSelector} from "react-redux";
import {TFilm, RootState} from "../../types/common";

interface IProps {
  film: TFilm
  stateLink: string
}

function Film(props: IProps) {
  const {film} = props;
  const {stateLink} = props;
  const myFilms = useSelector((state: RootState) => state.allFilms.myFilms);
  const genres = useSelector((state: RootState) => state.allFilms.genres);
  const dispatch = useDispatch();

  const genr = film.genre_ids.map(
    genreIds => genres.filter(
      genre => genreIds === genre.id).map(
      genre => genre.name
    )
  )
  const genr2 = genr.slice(0, 2).join(', ')

  const set = myFilms.find(myFilm => myFilm.id === film.id)
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!set) {
      dispatch(addMyFilm(film));
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
    <div className='card-film'>
      <div>
        <h3>{film.title}</h3>
        <p>{(genr.length > 2) ? genr2 + ' ...' : genr2}</p>
        <p>Дата выхода: {film.release_date}</p>
        <span>
        Рейтинг <strong>{film.vote_average}</strong>
      </span>
      </div>
      <div className='btn'>
        <button className="button">
          <Link to={{pathname: `/${stateLink}/${film.id}`, state: `${stateLink}`}}>
            подробнее
          </Link>
        </button>
        {set ? del : add}
      </div>
    </div>
  )
}

export default Film