import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilm} from "../../redux/actions";
import Loader from "../Loader";
import Film from "./Film";
import '../../styles/films.css'

function FilmList() {
  const dispatch = useDispatch()
  const films = useSelector(state => state.allPosts.fetchPosts)
  const loading = useSelector(state => state.app.loading)
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
        onClick={() => dispatch(fetchFilm())}
      >Загрузить</button>
    </div>
  )
  return (
    <div className='container'>
      <h2>Фильмы</h2>
      <ul className='ul_f'>
        {(!films.length) ? button : elem}
      </ul>
    </div>
  )
}
export default FilmList