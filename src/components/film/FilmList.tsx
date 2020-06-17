import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms, genreList, loadMyFilms} from "../../stores/filmsActions";
import Loader from "../loader/Loader";
import Film from "./Film";
import './films.css'
import Pages from "./Pages";
import {RootState} from "../../types/common";

function FilmList() {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.allFilms.fetchFilms);
  const loading = useSelector((state: RootState) => state.app.loading);

  useEffect(() => {
    dispatch(loadMyFilms())
    dispatch(genreList())
  }, [dispatch])

  if (loading)
    return <Loader/>

  const elem = films.map(film =>
    <li key={film.id} className="film">
      <Film film={film} stateLink='films'/>
    </li>
  )
  const button = (
    <div>
      <button
        className="button"
        onClick={() => dispatch(fetchFilms())}
      >
        Загрузить
      </button>
    </div>
  )
  return (
    <div className='container'>
      <h2>Фильмы</h2>
      {(films.length) ? <Pages/> : null}
      <ul className='ul_f'>
        {(!films.length) ? button : elem}
      </ul>
    </div>
  )
}

export default FilmList