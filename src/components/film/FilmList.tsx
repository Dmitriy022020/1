import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMyFilm, fetchFilms} from "../../stores/actions";
import Loader from "../loader/Loader";
import Film from "./Film";
import './films.css'
import Pages from "./Pages";

function FilmList() {
  const dispatch = useDispatch()
  const films = useSelector(state => state.allFilms.fetchFilms)
  const loading = useSelector(state => state.app.loading)
  const myFilms = useSelector(state => state.allFilms.myFilms)


  if (myFilms.length === 0) {
    const saved = JSON.parse(localStorage.getItem('myFilms') || '[]')
    dispatch(addMyFilm(saved))
  }

  useEffect(() => {
    localStorage.setItem('myFilms', JSON.stringify(myFilms))
  }, [myFilms])

  if (loading)
    return <Loader/>

  console.log(films)

  const elem = films.map(film =>
    <li key={film.id} className="film">
      <Film film={film}/>
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